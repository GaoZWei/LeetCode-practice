// 回溯模板

function backtracking(参数) {

    if (终止条件) {
        存放结果
        return
    }
    
    for(选择本层集合中的元素;;){
        处理节点
        backtracking(路径,选择列表tmp)
        回溯,撤销处理结果
    }
}