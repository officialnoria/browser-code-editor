# Browser Code Editor

This project is a markdown and code editor thar runs locally in your browser window.

It consists of two types of cells:
- Markdown cells, which implements full functionality, and a preview window.
- Code cells. A code cell consists of two views. The left one is a Visual Studio Code editor (it is the same editor engine), which has IntelliSense enabled for JavaScript code. The right view is the preview window for the compiled JS code written.

**The Code Editor's main functionality is its ability to actually run and compile React code**

For example, if you write

![Code Editor Hello World](/public/hello-world.png)

You'll get the response

![Compiled Hello World Response](/public/hw.png)

You can import any module from NPM, here's an example of a simple component styled using TailwindCSS

![Tailwind CSS Example](/public/tailwind.png)

Its main purpose is to act as a documentation tool, and to test small code snippets.

![Minimal React App](/public/sample-react.png)