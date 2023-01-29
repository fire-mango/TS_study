import Foods from './foods'
import ScorePanel from './ScorePanel'
import Snake from "./Snake";


// 控制所有类
class GameControl {
    // 蛇
    snake: Snake;
    // 食物
    food: Foods;
    // 分数
    scorePanel: ScorePanel;
    // 蛇移动的方向
    direction: string = "ArrowRight";
    // 蛇移动的方向
    oldDirection: string = "ArrowRight";
    // 游戏是否结束
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Foods();
        this.scorePanel = new ScorePanel();

        this.init()
    }

    // 游戏初始化方法
    init() {
        // 绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    // 键盘按下的响应函数
    keydownHandler(enent: KeyboardEvent) {
        let keyArr: string[] = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
        // type T = any;
        // let keyArr: Array<T> = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
        keyArr.forEach(item => {
            if (enent.key === item) {
                if (this.snake.bodies.length > 1) {
                    if (this.describe(enent.key)) {
                        this.direction = enent.key
                    }
                } else {
                    this.direction = enent.key
                }

            }
        });
    }

    // 不能调头
    describe(value: string) {
        let describeState: boolean = true
        switch (value) {
            case 'ArrowUp':
                if (this.direction === 'ArrowDown') {
                    describeState = false
                } else {
                    describeState = true
                }
                break;

            case 'ArrowDown':
                if (this.direction === 'ArrowUp') {
                    describeState = false
                }
                break;

            case 'ArrowLeft':
                if (this.direction === 'ArrowRight') {
                    describeState = false
                }
                break;

            case 'ArrowRight':
                if (this.direction === 'ArrowLeft') {
                    describeState = false
                }
                break;

            default:
                break;
        }
        return describeState;
    }

    // 蛇移动的方法
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10
                break;

            case 'ArrowDown':
                Y += 10
                break;

            case 'ArrowLeft':
                X -= 10
                break;

            case 'ArrowRight':
                X += 10
                break;

            default:
                break;
        }

        this.eatFood(X, Y)

        try {
            this.snake.changeHead(X, Y)
        } catch (e: any) {
            this.isLive = false
            alert(e.message)
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 吃食物检测
    eatFood(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl;