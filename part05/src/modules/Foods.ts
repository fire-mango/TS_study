// 定义food类
class Foods {
    // 定义一个代表food的元素
    element: HTMLElement;

    constructor() {
        // 获取food元素
        this.element = document.getElementById('food')!;
        // this.element = document.getElementById('food') as HTMLElement;
    }
    // 定义一个获取x轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 改变食物位置
    change() {
        /* 
            最小值为0，最大值为290
            每次移动一格。大小为10，食物left 和 top 为10的倍数
        */
        let left = Math.floor(Math.random() * 30) * 10
        let top = Math.floor(Math.random() * 30) * 10

        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}

export default Foods;