class Monster {
    constructor(
        public name: string,
        public location: string,
        public rating: number,
        public weakness: string,
        //two more random ones, idk yet
    ) {}
    logName(name: string) {
        return name;
    }
    public constructed(type: any) {
        this.initialize()
    }
}

