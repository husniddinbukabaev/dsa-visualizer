export function insertBST(root, value) {
    if (!root) {
      return { value, left: null, right: null };
    }
  
    if (value < root.value) {
      root.left = insertBST(root.left, value);
    } else {
      root.right = insertBST(root.right, value);
    }
  
    return root;
  }
  
  export function inorderBST(node, result = []) {
    if (!node) return;
    inorderBST(node.left, result);
    result.push(node.value);
    inorderBST(node.right, result);
    return result;
  }
  