import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Markdown } from '@/components/DataDisplay/Markdown';
import { BlogSection } from '@/features/blog/components';
import { PostQuery } from '@/gql/graphql';
import { formatDateEn, utcToJstTime } from '@/utils/date';

interface BlogContentProps {
  post: PostQuery['post'];
}

export const BlogContent: (props: BlogContentProps) => JSX.Element = ({ post }) => {
  return (
    <section>
      {/*{post.description && data.post?.showDescription && (*/}
      {/*  <p className='mb-6 leading-loose text-gray-500 dark:text-gray-400'>*/}
      {/*    {post?.description}*/}
      {/*  </p>*/}
      {/*)}*/}

      <article className='flex flex-col gap-6'>
        <BlogSection>
          {/* Header */}
          <div className='-mt-2 mb-4 flex justify-between'>
            <span className='text-gray-400 dark:text-gray-500'>
              <FontAwesomeIcon
                icon={faCalendar}
                className='mr-2'
                size='1x'
              />
              <time>{formatDateEn(utcToJstTime(new Date(post.publishedAt)), 'LLL d, yyyy')}</time>
            </span>
          </div>

          {/* Body */}
          <Markdown
            markdown={post.content.markdown}
            className={clsx('')}
          />
        </BlogSection>
      </article>
    </section>
  );
};
