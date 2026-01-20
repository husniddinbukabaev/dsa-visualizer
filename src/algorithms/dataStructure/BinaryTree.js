export function inorderSteps(node, steps = []) {
    if (!node) return;
    inorderSteps(node.left, steps);
    steps.push(node.value);
    inorderSteps(node.right, steps);
    return steps;
  }
  
  export function preorderSteps(node, steps = []) {
    if (!node) return;
    steps.push(node.value);
    preorderSteps(node.left, steps);
    preorderSteps(node.right, steps);
    return steps;
  }
  
  export function postorderSteps(node, steps = []) {
    if (!node) return;
    postorderSteps(node.left, steps);
    postorderSteps(node.right, steps);
    steps.push(node.value);
    return steps;
  }
  
  