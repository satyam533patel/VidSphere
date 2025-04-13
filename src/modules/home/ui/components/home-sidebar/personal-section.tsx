"use client";

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FlameIcon, HistoryIcon, HomeIcon, ListVideoIcon, PlaySquareIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items=[
    {
        title: "History",
        url: "/playlists/history",
        icon:HistoryIcon,
        auth:true
    },
    {
        title: "Liked Videos",
        url: "/playlists/liked",
        icon:ThumbsUpIcon,
        auth: true
    },
    {
        title: "All Playlists",
        url: "/playlists",
        icon:ListVideoIcon,
        auth:true
    },
];
export const PersonalSection =()=>{
    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                You
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                   {items.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} //todo: chnage to look at current pathname
                                onClick={()=>{}} // todo: do something onclick
                            >
                                <Link href={item.url} className="flex items-centre gap-4">
                                <item.icon/>
                                <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                   ))} 
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}