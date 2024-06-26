// 定义一个分数类
class ScorePanel {
    score: number = 0;
    level: number = 1;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        // 获取food元素
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        // this.element = document.getElementById('food') as HTMLElement;

        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置一个加分方法
    addScore() {
        this.scoreElement.innerHTML = ++this.score + ''
        if (this.score > this.upScore) {
            if (this.score % this.upScore === 1) {
                this.levelUp()
            }
        }
    }

    // 设置一个等级提升方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel;