import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreatePostDto, PostDto } from 'src/types/posts/dto.types';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PostsService {
    constructor(private readonly httpService: HttpService) { }
    getPost(): PostDto[] {
        return [];
    }

    createPost(createPostDto: CreatePostDto): PostDto {
        return {
            id: '1',
            title: createPostDto.title,
            content: createPostDto.content,
            // TODO: get auther from auth
            author: "John Doe",
            tags: "all",
            medias: [],
            location: {
                id: '1',
                name: 'Location 1',
                latitude: 1,

            },
            createdAt: new Date(),
            updatedAt: new Date(),
            likes: 0,
            dislikes: 0,
            comments: [],

        };
    }


}

