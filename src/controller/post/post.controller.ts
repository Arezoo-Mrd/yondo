import { BadRequestException, Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommonService } from 'src/services/common/common.service';
import { PostsService } from 'src/services/posts/posts.service';
import { CreatePostDto, PostDto } from 'src/types/posts/dto.types';
import { getClientIp } from 'src/utils/getClientIp';
import { isPublicIp } from 'src/utils/isPublicIp';


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
    @ApiOperation({ summary: 'Create a post' })
    @ApiResponse({ status: 201, description: 'Post created successfully', type: PostDto })
    async createPost(@Body() createPostDto: CreatePostDto, @Req() req: Request & { ip: string; connection: { remoteAddress: string }, socket: { remoteAddress: string } }) {
        const rawIp = getClientIp(req);

        if (!rawIp) {
            console.log('No IP found');
            // Handle missing IP if needed
        }

        let location: any = null;

        if (rawIp && isPublicIp(rawIp)) {
            location = await this.commonService.getLocationFromIp(rawIp);
        } else {

            location = {
                country: 'Local',
                city: 'Localhost',
                lat: null,
                lon: null,
                isLocal: true
            };
        }

        // return this.postService.createPost(createPostDto);
    }
}
