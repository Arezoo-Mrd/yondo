import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsEnum, IsNumber, IsObject, IsOptional, IsString } from "class-validator";


class MediaDto {
    @ApiProperty({ description: 'The id of the media' })
    @IsString()
    id: string;

    @ApiProperty({ description: 'The url of the media' })
    @IsString()
    url: string;

    @ApiProperty({ description: 'The type of the media' })
    @IsString()
    type: string;

    @ApiProperty({ description: 'The size of the media' })
    @IsNumber()
    size: number;

    @ApiProperty({ description: 'The duration of the media' })
    @IsNumber()
    duration: number;
}

class ReplyDto {
    @ApiProperty({ description: 'The content of the reply' })
    @IsString()
    commentId: string;

    @ApiProperty({ description: 'The title of the post' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'The content of the post' })
    @IsString()
    content: string;

    @ApiProperty({ description: 'The medias of the post', type: [MediaDto] })
    @IsArray()
    medias: MediaDto[];
    tags: "all" | "yourFollowers" | "yourFollowing" | "yourPosts" | "yourLikes" | "yourDislikes" | "yourComments" | "yourReplies" | "yourMentions" | "yourBookmarks" | "yourSaved" | "yourTagged";

    @ApiProperty({ description: 'The number of likes of the post' })
    @IsNumber()
    likes: number;

    @ApiProperty({ description: 'The number of dislikes of the post' })
    @IsNumber()
    dislikes: number;
    comments: CommentDto[];

    @ApiProperty({ description: 'The replies of the post', type: [ReplyDto] })
    @IsArray()
    replies: ReplyDto[];
}

class CommentDto {
    @ApiProperty({ description: 'The content of the comment' })
    @IsString()
    content: string;

    @ApiProperty({ description: 'The author of the comment' })
    @IsString()
    author: string;


    @ApiProperty({ description: 'The number of likes of the comment' })
    @IsNumber()
    @IsOptional()
    likes?: number;

    @ApiProperty({ description: 'The number of dislikes of the comment' })
    @IsNumber()
    @IsOptional()
    dislikes?: number;

    @ApiProperty({ description: 'The replies of the comment', type: [ReplyDto], nullable: true })
    @IsArray()
    @IsOptional()
    replies?: (ReplyDto)[];

}

// 


export interface LocationType {
    country: string,
    city: string,
    lat: number | null,
    lon: number | null,
    isLocal: true
}


export class CreatePostWithFilesDto {
    @ApiProperty({ type: 'string', format: 'binary', description: 'Upload one or multiple files' })
    files?: any;

    @ApiProperty({ description: 'The title of the post' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'The content of the post' })
    @IsString()
    content: string;

    @ApiProperty({ description: 'The tags of the post' })
    @IsString()
    @IsOptional()
    tags?: string;
}

export class CreatePostDto {
    @ApiProperty({ description: 'The title of the post' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'The content of the post' })
    @IsString()
    content: string;

    @ApiProperty({ description: 'The medias of the post', type: [MediaDto] })
    @IsArray()
    medias?: MediaDto[];

    @ApiProperty({ description: 'The tags of the post' })
    @IsString()
    tags: string;
}

export type UpdatePostDto = {
    title?: string;
    content?: string;
    author?: string;
    createdAt?: Date;
    updatedAt?: Date;

}



class LocationDto {

    @ApiProperty({ description: 'The id of the location' })
    @IsString()
    id: string;

    @ApiProperty({ description: 'The name of the location' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'The latitude of the location' })
    @IsNumber()
    latitude: number;
}



export class PostDto {
    @ApiProperty({ description: 'The id of the post' })
    @IsString()
    id: string;

    @ApiProperty({ description: 'The title of the post' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'The content of the post' })
    @IsString()
    content: string;

    @ApiProperty({ description: 'The author of the post' })
    @IsString()
    author: string;

    @ApiProperty({ description: 'The tags of the post' })
    @IsString()
    tags: "all" | "yourFollowers" | "yourFollowing" | "yourPosts" | "yourLikes" | "yourDislikes" | "yourComments" | "yourReplies" | "yourMentions" | "yourBookmarks" | "yourSaved" | "yourTagged" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved" | "yourSaved"


    @ApiProperty({ description: 'The medias of the post' })
    @IsArray()
    medias: MediaDto[];

    @ApiProperty({ description: 'The location of the post' })
    @IsObject()
    location: LocationType;

    @ApiProperty({ description: 'The created at of the post' })
    @IsDate()
    createdAt: Date;

    @ApiProperty({ description: 'The updated at of the post' })
    @IsDate()
    updatedAt: Date;
}