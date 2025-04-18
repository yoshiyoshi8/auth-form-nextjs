interface EmailTemplateProps {
  username: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  content,
}) => {
  return (
    <div>
      <h1>お問い合わせフォームからお問い合わせがありました。</h1>
      <p>お名前：{username}</p>
      <p>メールアドレス：{email}</p>
      <p>{content}</p>
    </div>
  );
};
