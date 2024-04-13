<template>
    <HomeTitle></HomeTitle>
    <BlogsList>
        <BlogItem :blogPost="blogPost" :theme="i % 2 == 0 ? theme : null" v-for="i in 10" @click="showModel = true">
        </BlogItem>
    </BlogsList>
    <TheModel :isShow="showModel" @close-model="showModel = false">
        <div>
            <BlogContent :markdown="markdown"></BlogContent>
        </div>
    </TheModel>
</template>

<script setup>
import HomeTitle from '../components/HomeTitle.vue';
import BlogsList from "../components/BlogsList.vue";
import BlogItem from "../components/BlogItem.vue";
import TheModel from '../components/TheModel.vue';
import BlogContent from "../components/BlogContent.vue";
import { ref } from 'vue';

const blogPost = ref({
    title: 'Vue3全栈',
    techStack: 'Vue3',
    summary: '经验分享',
    date: '2024-01-01'
});
const theme = ref('dark');
const showModel = ref(false);

const markdown = ref(`
1.2 协议族

通常使用的最多的协议为IPV4协议。

- IPv4协议族：\`PF_INET\`

- IPv6协议族：\`PF_INET6\`

- 本地通信的UNIX协议族：\`PF_LOCAL\`

- 底层套接字的协议族：\`PF_PACKET\`

- IPX Novell协议族：\`PF_IPX\`
#include <iostream>
\`\`\`cpp
int main() {
    // 包含转义字符的字符串
    std::string message = "Hello, I'm using escape sequences!\n\tThis is a tab character.\nThis is a backslash: \\\n";

    // 输出带有转义字符的字符串
    std::cout << message;

    return 0;
}
\`\`\`
...
1.2 协议族

通常使用的最多的协议为IPV4协议。

- IPv4协议族：\`PF_INET\`

- IPv6协议族：\`PF_INET6\`

- 本地通信的UNIX协议族：\`PF_LOCAL\`

- 底层套接字的协议族：\`PF_PACKET\`

- IPX Novell协议族：\`PF_IPX\`1.2 协议族

通常使用的最多的协议为IPV4协议。

- IPv4协议族：\`PF_INET\`

- IPv6协议族：\`PF_INET6\`

- 本地通信的UNIX协议族：\`PF_LOCAL\`

- 底层套接字的协议族：\`PF_PACKET\`

- IPX Novell协议族：\`PF_IPX\`1.2 协议族

通常使用的最多的协议为IPV4协议。

- IPv4协议族：\`PF_INET\`

- IPv6协议族：\`PF_INET6\`

- 本地通信的UNIX协议族：\`PF_LOCAL\`

- 底层套接字的协议族：\`PF_PACKET\`

- IPX Novell协议族：\`PF_IPX\`1.2 协议族

通常使用的最多的协议为IPV4协议。

- IPv4协议族：\`PF_INET\`

- IPv6协议族：\`PF_INET6\`

- 本地通信的UNIX协议族：\`PF_LOCAL\`

- 底层套接字的协议族：\`PF_PACKET\`

- IPX Novell协议族：\`PF_IPX\`1.2 协议族

通常使用的最多的协议为IPV4协议。

- IPv4协议族：\`PF_INET\`

- IPv6协议族：\`PF_INET6\`

- 本地通信的UNIX协议族：\`PF_LOCAL\`

- 底层套接字的协议族：\`PF_PACKET\`

- IPX Novell协议族：\`PF_IPX\`
`);



</script>

<style></style>
