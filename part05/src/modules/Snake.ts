class Snake {
    // 获取蛇的头部
    head: HTMLElement;
    // 获取蛇的身体
    bodies: HTMLCollection;
    // 获取蛇容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake_box')!;
        this.head = document.querySelector('#snake_box > div')!;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇的坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    // set X(value: number) {
    //     if (this.X === value) {
    //         return;
    //     }
    //     if (value < 0 || value > 290) {
    //         throw new Error('Game Over!')
    //     }

    //     this.moveBody()

    //     this.head.style.left = value + 'px';
    // }

    // set Y(value: number) {
    //     if (this.Y === value) {
    //         return;
    //     }
    //     if (value < 0 || value > 290) {
    //         throw new Error('Game Over!')
    //     }

    //     this.moveBody()

    //     this.head.style.top = value + 'px';
    // }

    // 改变头部
    changeHead(X: number, Y: number) {
        if (X < 0 || X > 290 || Y < 0 || Y > 290) {
            throw new Error('Game Over!')
        }

        this.moveBody()

        if (this.X != X) {
            this.head.style.left = X + 'px';
        }

        if (this.Y != Y) {
            this.head.style.top = Y + 'px';
        }

        this.checkHeadBody()
    }

    // 增加身体
    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

    // 移动身体
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let bodyLeft = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let bodyTop = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = bodyLeft + 'px';
            (this.bodies[i] as HTMLElement).style.top = bodyTop + 'px';
        }
    }

    // 检查是否相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let sBody = this.bodies[i] as HTMLElement
            if (this.X === sBody.offsetLeft && this.Y === sBody.offsetTop) {
                throw new Error("555555");
            }
        }
    }
}

export default Snake;