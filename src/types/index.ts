export interface Card {
    title: string;
    subtitle: string;
    created: Date;
    description: string;
    imageUrl: string;
    id: string;
};

export interface ProjectCardProps {
    data : Card
};