class Node {
    constructor(v) {
        this.value = v;
        this.left = null;
        this.right = null;
        this.x = 400;
        this.y = 40;
        this.px = 0;
        this.py = 0;
        this.pv = 0;
        this.qx = 0;
        this.qy = 0;
        this.parent = null;
    }

    add(node) {
        if (node.value < this.value) {
            if (this.left != null) {
                this.left.add(node);
            }
            else {
                node.x = this.x - 100;
                node.y = this.y + 100;
                node.px = this.x - 14;
                node.py = this.y + 14;
                node.qx = node.x + 14;
                node.qy = node.y - 14;
                node.pv = this.value;
                node.parent = this;
                this.left = node;
            }
        }
        else if (node.value > this.value) {
            if (this.right != null) {
                this.right.add(node);
            }
            else {
                node.x = this.x + 100;
                node.y = this.y + 100;
                node.px = this.x + 14;
                node.py = this.y + 14;
                node.qx = node.x - 14;
                node.qy = node.y - 14;
                node.pv = this.value;
                node.parent = this;
                this.right = node;
            }
        }
    }

    delete(node) {
        if (node.value < this.value) {
            if (this.left != null) {
                this.left.delete(node);
            }
            else {
                throw new Error('无此节点');
            }
        }
        else if (node.value > this.value) {
            if (this.right != null) {
                this.right.delete(node);
            }
            else {
                throw new Error('无此节点');
            }
        }
        else {
            if (this.parent.left != null && this.parent.left.value == this.value) {
                this.parent.left = null;
            }
            if (this.parent.right != null && this.parent.right.value == this.value) {
                this.parent.right = null;
            }
            this.parent = null;
            return;
        }
    }
}

class Tree {

    constructor() {
        this.head = null;
    }

    add(n) {
        let node = new Node(n);

        if (this.head == null) {
            this.head = node;
        }
        else {
            this.head.add(node);
        }
    }

    sort(node) {
        if (node.left != null) {
            this.sort(node.left);
        }
        console.log(node.value);

        if (node.right != null) {
            this.sort(node.right);
        }
    }

    draw(node, callback) {

        callback(node);
        if (node.left != null) {
            this.draw(node.left, callback);
        }
        if (node.right != null) {
            this.draw(node.right, callback);
        }

    }

    sort1() {
        this.sort(this.head);
    }

    draw1(callback) {

        if (this.head != null) {
            this.draw(this.head, callback);
        }
    }

    delete(n) {
        let node = new Node(n);
        if (this.head == null) {
            throw new Error('无根节点');
        }
        else {
            if (this.head.value == n) {
                this.head.left = null;
                this.head.right = null;
                this.head = null;
            }
            else {
                this.head.delete(node);
            }
        }
    }

}


