import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiRespose";
import VerificationEmail from "../../email/VerificationEmail";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Mystery Message | Verification Code',
        react: VerificationEmail({ username, otp: verifyCode }),
      });
    return {
      success: true,
      message: "Verification email sent successfully!",
    };
  } catch (error) {
    console.log("Error in Sending Verification Email", error);
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}
