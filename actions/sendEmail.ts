'use server';
import { validateString } from '@/lib/untils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  try {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');
    // 这里只校验长度和类型就好了。email格式校验、XSS攻击过滤等，resend 内置了。
    if (!validateString(senderEmail, 500)) {
      return {
        error: 'email 校验失败',
      };
    }

    if (!validateString(message, 5000)) {
      return {
        error: 'message 校验失败',
      };
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hj1254123@gmail.com',
      subject: 'Message from contact form',
      html: `<p>${message}</p>`,
      reply_to: senderEmail,
    });

    if (error) {
      // 正常情况应该记录日志
      console.log(error);
      let message = '发送服务出错，请稍后再试。或通过邮箱地址直接联系我~';
      // 仅告诉客户端验证失败的消息
      if (error.name === 'validation_error') {
        message = error.message;
      }
      return {
        error: message,
      };
    }
    return { data };
  } catch (error) {
    return {
      error: '发送失败，未知错误',
    };
  }
}
