# DOM Introduction

## What is DOM?

```
DOM stands for Document Object Model. It is an application programming interface (API) that allows users to create, change, or remove elements from the document.
The "DOM" represents an HTML document as a tree of nodes. A node represents an HTML element.
```

## DOM Terminology:

### 1. Document

```
The document is the root node of the DOM tree. It represents the entire web page. You can access the document in JavaScript using document.
```

### 2. Nodes

```HTML
Nodes are the building blocks of the DOM. They are the elements and their attributes. Nodes can be text, comments, or other nodes.
The DOM tree is made up of nodes. Nodes can be one of several types:

Element Node: Represents HTML tags such as <div>, <p>, <span>, etc. Example: The <h1> element in the DOM is an element node.

Attribute Node: Represents the attributes of an element (like class, id, etc.).
Example: The class="header" inside an element like <h1 class="header"> is an attribute node.

Text Node: Represents the text inside an element. Each text inside an element (like inside a <p> tag) is a text node.
Example: The text "Hello World" inside an <h1> tag is a text node.
```

### 3. Element

```HTML
An element is a specific type of node, representing a single HTML tag and its content.
Every tag in your HTML document is an element. For example, <h1>, <div>, <p> are all element nodes.
```

### 4. Attribute

```
Each HTML element can have attributes, which provide additional information about the element.
Common attributes include id, class, src, href, and alt. Attributes are specified within the opening tag of an HTML element.
```

### 5. Nodes

```
Nodes are the building blocks of the DOM. They are the elements and their attributes.
Nodes can be text, comments, or other nodes. The DOM tree is made up of nodes.
```

### 6. Parent and Child Nodes

```HTML
In the DOM tree, elements have parent and child relationships based on how they are nested in the HTML.

1. A parent node is any node that contains another node.
2. A child node is a node that is contained within a parent node.

Example:
<body>
	<div>
		<p>Hello World</p>
	</div>
</body>

In the above example, the <body> is the parent of <div>, and <div> is the parent of <p>.
Conversely, <p> is a child of <div>, and <div> is a child of <body>.
```

### 7. Siblings

```HTML
Nodes that share the same parent are called siblings. In the following example, the <h1> and <p> elements are siblings.

Example:
<body>
	<h1>Heading</h1>
	<p>Paragraph</p>
</body>
```

### 8. Root Node:

```
The root node of the DOM is the topmost node in the tree. In an HTML document, the <html> element is usually the root node, and all other elements descend from it.
```

### 9. Document Object

```
The document object is the primary entry point to the DOM which provides methods to select, manipulate, and interact with elements on the page.
Example of common DOM methods:

1. document.getElementById(id): Selects an element by its id attribute.
2. document.getElementsByClassName(className): Selects all elements with a specific class.
3. document.querySelector(selector): Selects the first element that matches a CSS selector.
4. document.querySelectorAll(selector): Selects all elements that match a CSS selector.
```

### 10. DOM Manipulation

```
DOM manipulation is the process of adding, removing, and modifying elements on the page.
Using JavaScript, we can change the DOM and their content. Some common ways to manipulate the DOM include:

1. Create Elements
2. Modify Content
3. Remove Elements
```

## Traversing the DOM

```
We can use JavaScript to traverse the DOM. We can move up and down the DOM tree by using various properties:

1. parentNode: Moves to the parent node of the selected element.

2. childNodes: Returns all child nodes (including text and comments) of the selected element.

3. children: Returns all child elements (excluding text and comments) of the selected element.

4. firstChild: Returns the first child node (including text and comments) of the selected element.

5. lastChild: Returns the last child node (including text and comments) of the selected element.

6. nextSibling: Moves to the next sibling node (including text and comments).

7. previousSibling: Moves to the previous sibling node (including text and comments).

8. firstElementChild: Returns the first child element of the selected element.

9. lastElementChild: Returns the last child element of the selected element.

10. nextElementSibling: Moves to the next sibling element (excluding text and comments).

11. previousElementSibling: Moves to the previous sibling element (excluding text and comments).
```

## Key Differences

```
1. childNodes includes all nodes (elements, text, comments).

2. children only includes element nodes.

3. firstChild/lastChild can be text or element nodes.

4. while firstElementChild/lastElementChild only refer to element nodes.

5. nextSibling/previousSibling include text or comment nodes.

6. whereas nextElementSibling/previousElementSibling only include element nodes.
```
