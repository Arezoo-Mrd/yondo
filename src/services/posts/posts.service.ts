import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreatePostDto, CreatePostWithFilesDto, LocationType, PostDto } from 'src/types/posts/dto.types';
import { HttpService } from '@nestjs/axios';
import { prisma } from 'src/db';
import { Medias } from '@prisma/client';


@Injectable()
export class PostsService {
    constructor(private readonly httpService: HttpService) { }
    getPost(): PostDto[] {
        return [];
    }

    async createPost(createPostDto: CreatePostWithFilesDto, location: LocationType): Promise<PostDto> {
        const post = await prisma.posts.create({
            data: {
                title: createPostDto.title,
                content: createPostDto.content,
                country: location.country,
                city: location.city,
                lat: location.lat ?? 0,
                lon: location.lon ?? 0,
                isLocal: location.isLocal,
                tags: createPostDto.tags,
                author: "test",
                medias: {
                    create: createPostDto.files?.map(media => ({
                        url: media.url,
                        type: media.type
                    }))
                }
            }
        });

        let medias: Medias[] = [];
        if (createPostDto.files?.length && createPostDto.files.length > 0) {
            // medias = await prisma.medias.createMany({
            //     data: createPostDto.medias.map(m => ({
            //         url: m.url,
            //         type: m.type,
            //         postId: post.id,
            //     }))
            // })
        }


        return {
            id: post.id.toString(),
            title: post.title,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            content: post.content,
            medias: medias.map(m => ({
                id: m.id.toString(),
                url: m.url,
                type: m.type,
                size: 0,
                duration: 0
            })),
            tags: post.tags as any,
            author: post.author,
            location: location


        }

    }
}
