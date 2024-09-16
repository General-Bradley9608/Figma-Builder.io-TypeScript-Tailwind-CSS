import React from "react";
import Header from "../../../components/header/Header";
import ForgotPasswordForm from "../../../components/fogotPassword/ForgotPasswordForm";
import Footer from "../../../components/footer/Footer";

const ForgotPasswordPage: React.FC = () => {
  return (
    <main className="flex self-stretch bg-white">
      <div className="flex w-full bg-white min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <ForgotPasswordForm />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
