import {FC, useEffect, useRef} from 'react'
import EditorJS from '@editorjs/editorjs';
import {EDITOR_JS_TOOLS} from './editorTools.ts'


export const EditorContainer: FC = () => {
    const editorRef = useRef(null);
    let rendered = false;

    useEffect(() => {
        if (editorRef.current && !rendered) {
            rendered = true;
            new EditorJS({
                holder: editorRef.current,
                tools: EDITOR_JS_TOOLS,
                autofocus: true,
                placeholder: 'Let`s write an awesome story!',
                data: {blocks: []},
                onReady: () => {
                    console.log('Editor.js is ready to work!')
                },
                onChange: (_, event) => {
                    console.log('Now I know that Editor\'s content changed!', event)
                },
            });
        }
    }, [editorRef.current]);

    return (
        <div>
            <section ref={editorRef}></section>
        </div>
    );
}