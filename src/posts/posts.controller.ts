import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { query } from 'express';
import { CreatePostDto } from './post.dto';

@Controller('posts')
export class PostsController {
    @Get()
    index(@Headers('authorization') Headers) {
        console.log(Headers)
        return [
            {
                title: 'hello'
            }
        ];
    }

    @Get(':id')
    show(@Param() params) {
        return {
            title: `Post ${params.id}`
        }
    }

    @Post()
    store(@Body() post: CreatePostDto) {
        console.log(post.title)
    }
}
