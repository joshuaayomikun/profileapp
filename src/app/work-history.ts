export interface WorkHistory {
    CompanyName: string;
    Positions: Position[];
}

export interface Position {
    Name: string;
    Positions: string[];
    Period: string;
}
