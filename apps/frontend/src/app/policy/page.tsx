import { Metadata, NextPage } from 'next';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | tatsutakein.jp',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

const Policy: NextPage = () => {
  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.policy(true)}
    >
      <h1 className={clsx('text-3xl')}>プライバシーポリシー</h1>

      <p className={clsx('mt-4')}>
        本プライバシーポリシーは、当Webサイト(tatsutakein.jp)が収集し、利用する全ての個人情報を対象として、当Webサイトが保有する個人情報に関する基本的な取り決めを定めるものとします。
      </p>

      <h2 className={clsx('text-2xl mt-8')}>法律、法令等の遵守</h2>
      <p className={clsx('mt-4')}>
        当Webサイトは個人情報を取り扱うにあたっては個人情報の保護に関する法令、ガイドラインおよび本プライバシーポリシーを遵守致します。
      </p>

      <h2 className={clsx('text-2xl mt-8')}>個人情報の収集について</h2>
      <p className={clsx('mt-4')}>提供する当Webサイトの運営に必要な範囲で個人情報を収集致します。</p>
      <p className={clsx('mt-4')}>
        当Webサイトでは、サイトの利用状況やユーザー属性情報（年齢、性別、興味や関心など）を把握するためにGoogle
        Analyticsを利用しております。
        <br />
        Google Analyticsではクッキー（cookie）を使用し個人を特定する情報を含まずにログを収集します。
        <br />
        なお、Google
        Analyticsの利用により収集されるログはGoogle社のプライバシーポリシーに基づいて管理されます。
        <br />
        Google Analyticsについて、およびGoogle社のプライバシーポリシーについてはGoogle
        Analytics概要をご覧ください。
      </p>

      <h2 className={clsx('text-2xl mt-8')}>個人情報の利用</h2>
      <p className={clsx('mt-4')}>
        当Webサイトは、ユーザーご本人の同意を得た場合、および法令により例外として取り扱うことが認められている場合を除き、収集した個人情報について、収集の際に予め明示した目的または公表している利用目的においてのみ利用いたします。
      </p>

      <h2 className={clsx('text-2xl mt-8')}>個人情報の提供</h2>
      <p className={clsx('mt-4')}>
        当Webサイトは、個人情報をユーザーご本人の同意なしに、業務委託先以外の第三者に開示・提供することはありません。
        <br />
        ただし、裁判所、警察等の公的機関から開示を求められた場合には、ご本人の同意なく個人情報を開示・提供することがあります。
      </p>

      <h2 className={clsx('text-2xl mt-8')}>個人情報の開示および訂正等</h2>
      <p className={clsx('mt-4')}>
        当Webサイトはユーザーご本人から、個人情報の訂正、削除、利用停止を求められた場合には、ご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正、削除、利用停止を行い、その旨をご本人に通知します。
        <br />
        なお、合理的な理由に基づいて訂正または利用停止を行わない旨の決定をしたときは、ユーザーに対しその旨を通知します。
      </p>

      <h2 className={clsx('text-2xl mt-8')}>免責</h2>
      <p className={clsx('mt-4')}>以下の場合は、第三者による個人情報の取得に関し、当Webサイトは何らの責任を負いません。</p>
      <ul className={clsx('mt-4', 'ml-2', 'list-inside', 'list-disc', 'space-y-2')}>
        <li>
          ユーザー自らが当Webサイト上の機能または別の手段を用いて第三者に個人情報を明らかにする場合
        </li>
        <li>
          ユーザーが当Webサイト上に入力した情報、活動情報等により、期せずして個人が特定できてしまった場合
        </li>
        <li>第三者が当Webサイト外で個人情報その他の利用者情報を取得した場合</li>
      </ul>
    </ContentsLayout>
  );
};

export default Policy;
