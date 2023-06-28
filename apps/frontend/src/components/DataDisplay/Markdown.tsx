'use client';

import clsx from 'clsx';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactMarkdown from 'react-markdown';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyIcon, ExternalLinkIcon } from '@radix-ui/react-icons';

interface Props {
  markdown: string;
  className?: string;
}

/**
 * Markdown
 */
export const Markdown = ({ markdown, className }: Props): JSX.Element => {
  const markdownText = markdown.replace(/\n/g, '  \n');

  return (
    <div className={clsx('react-markdown', className)}>
      <ReactMarkdown
        components={{
          code: MarkdownCode,
          p: ({ children }) => {
            return <p className='my-4'>{children}</p>;
          },
          a: ({ href, children }) => {
            return (
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='text-cyan-600 hover:opacity-50 inline-flex items-center'
              >
                {children}
                <ExternalLinkIcon className='ml-2' />
              </a>
            );
          },
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

/**
 * MarkdownCode
 */
export const MarkdownCode = ({ inline, className, children, ...props }: CodeProps): JSX.Element => {
  const codeText = children.toString().replace(/ {2}\n/g, '\n');
  const matchLang = /language-(\w+)/.exec(className || '');
  const fileName = (className || '').replace(/language-(\w+):?/, '');

  const [showCopied, setShowCopied] = useState(false);

  const handleCopyClick = () => {
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };

  if (inline) {
    return (
      <code
        className={clsx(
          'inline-block rounded-lg bg-gray-200 px-2 leading-relaxed dark:bg-zinc-700',
          className,
        )}
        {...props}
      >
        {codeText}
      </code>
    );
  }

  return (
    <div className='relative my-4 rounded-lg bg-zinc-700 px-5 py-3 leading-normal'>
      <CopyToClipboard
        text={codeText}
        onCopy={handleCopyClick}
      >
        <span className='absolute top-3 right-3 inline-block'>
          {showCopied && <span className='mr-2 opacity-80'>Copied!</span>}
          <CopyIcon className='cursor-pointer opacity-50 hover:opacity-80' />
        </span>
      </CopyToClipboard>

      {fileName && (
        <div className='mb-4'>
          <span className='inline-block underline underline-offset-8 opacity-50'>{fileName}</span>
        </div>
      )}

      {matchLang ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          // FIXME: tsが本番環境でハイライトされないので一時対応
          language={matchLang[1] === 'ts' ? 'tsx' : matchLang[1]}
          PreTag='div'
        >
          {codeText}
        </SyntaxHighlighter>
      ) : (
        <code
          className={className}
          {...props}
        >
          {codeText}
        </code>
      )}
    </div>
  );
};
