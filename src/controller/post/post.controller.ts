import { Body, Controller, Get, Post, Req, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { createWriteStream, promises as fs } from 'fs';
import * as path from 'path';
import { CommonService } from 'src/services/common/common.service';
import { PostsService } from 'src/services/posts/posts.service';
import { CreatePostWithFilesDto, LocationType, PostDto } from 'src/types/posts/dto.types';
import { getClientIp } from 'src/utils/getClientIp';
import { isPublicIp } from 'src/utils/isPublicIp';
import { diskStorage } from 'multer';





@Controller('post')
export class PostController {
    constructor(private readonly postService: PostsService, private readonly commonService: CommonService) { }

    @Get()
    @ApiOperation({ summary: 'Get all posts' })
    @ApiResponse({ status: 200, description: 'Get all posts', type: [PostDto] })
    getPost() {
        return this.postService.getPost();
    }


    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string', nullable: false },
                content: { type: 'string', nullable: false },
                tags: { type: 'string', nullable: true },
                files: {
                    type: 'array',
                    items: { type: 'string', format: 'binary' },
                    nullable: true,
                },
            },
        },
    })
    @ApiOperation({ summary: 'Create a post with medias' })
    @ApiResponse({ status: 201, description: 'Post created successfully' })
    @UseInterceptors(
        FilesInterceptor('files', 10, {
            storage: diskStorage({
                destination: path.join(process.cwd(), 'uploads'),
                filename: (req, file, cb) => {
                    const uniqueName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${path.extname(file.originalname)}`;
                    cb(null, uniqueName);
                },
            }),
        }),
    )
    async createPost(
        @Body() createPostDto: CreatePostWithFilesDto,
        @UploadedFiles() files: Express.Multer["File"][],
        @Req() req: Request,
        @Res() res: Response,
    ) {
        createPostDto.files = files.map(file => ({
            id: file.filename,
            url: `/uploads/${file.filename}`,
            type: file.mimetype.startsWith('image') ? 'image' : 'video',
            size: file.size,
            duration: 0
        }));

        const rawIp = getClientIp(req as any);
        let location: LocationType | null = null;
        if (rawIp && isPublicIp(rawIp)) {
            location = await this.commonService.getLocationFromIp(rawIp);
        } else {
            location = {
                country: 'Local',
                city: 'Localhost',
                lat: null,
                lon: null,
                isLocal: true,
            };
        }

        const post = await this.postService.createPost(createPostDto, location as LocationType);

        return res.status(201).json(post);
    }

}
