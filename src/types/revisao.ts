import React from "react";

export interface iService {
    id: number;
    name: string;
    image: string;
    text: React.ReactNode;
}