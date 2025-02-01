"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import TiptapToolbar from "./TiptapToolbar";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Document from "@tiptap/extension-document";

export default function Tiptap({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      Underline,
      Document,
      Paragraph,
      Text,
      Heading.configure({
        HTMLAttributes: { class: "text-2xl font-bold", levels: [1] },
        HTMLAttributes: { class: "text-xl font-bold", levels: [2] },
        HTMLAttributes: { class: "text-md font-bold", levels: [3] },
      }),
      Blockquote,
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc",
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: "list-decimal",
        },
      }),
      Link.configure({
        HTMLAttributes: {
          class: "underline",
        },
        autolink: true,
        openOnClick: false,
        validate: (href) => /^https?:\/\//.test(href),
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "flex flex-col min-h-[80px] border w-full rounded-b-md bg-transparent p-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-fit">
      <TiptapToolbar editor={editor} content={content} />
      <EditorContent editor={editor} style={{ whiteSpace: "pre-line" }} />
    </div>
  );
}
