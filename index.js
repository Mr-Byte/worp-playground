import * as monaco from 'monaco-editor';
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired

const editor = monaco.editor.create(document.getElementById("editor"), {
    value: "",
    theme: "vs-dark",
    automaticLayout: true,
    codeLens: false,
    minimap: { enabled: false },
    scrollbar: { vertical: "auto" }
});

const output = monaco.editor.create(document.getElementById("output"), {
    theme: "vs-dark",
    automaticLayout: true,
    codeLens: false,
    minimap: { enabled: false },
    readOnly: true,
    lineNumbers: false,
    scrollbar: { vertical: "auto" }
})


async function run() {
    const playground = await import("./pkg");

    document.getElementById("run").addEventListener("click", () => {
        output.setValue(playground.dice_run(editor.getValue()));
    });
}

run();