"use client";

import { useSearchParams } from "next/navigation";
import OnboardingLayout from "../components/OnboardingLayout/OnboardingLayout";
import GetStarted from "../containers/GetStarted/GetStarted";
import SignUp from "../containers/SignUp/SignUp";
import SignUpCgpa from "../containers/SignUpCgpa/SignUpCgpa";
import SignUpDesiredCGPA from "../containers/SignUpDesiredCGPA/SignUpDesiredCGPA";
import SignUpGpaScale from "../containers/SignUpGpaScale/SignUpGpaScale";
import SignUpHowManySemesters from "../containers/SignUpHowManySemesters/SignUpHowManySemesters";
import SignUpMimimumUnits from "../containers/SignUpMinimumUnits/SignUpMinimumUnits";
import SignUpReview from "../containers/SignUpReview/SignUpReview";
import { TOTAL_ONBOARDING_STEPS } from "../utils/constants";

const Page = () => {
  // Router
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  return (
    <OnboardingLayout
      progress={
        Number(step) > 0
          ? (Number(step) / TOTAL_ONBOARDING_STEPS) * 100
          : undefined
      }
    >
      {step === "get-started" ? (
        <GetStarted />
      ) : step === "1" ? (
        <SignUpGpaScale />
      ) : step === "2" ? (
        <SignUpCgpa />
      ) : step === "3" ? (
        <SignUpDesiredCGPA />
      ) : step === "4" ? (
        <SignUpHowManySemesters />
      ) : step === "5" ? (
        <SignUpMimimumUnits />
      ) : step === "review" ? (
        <SignUpReview />
      ) : (
        <SignUp />
      )}
    </OnboardingLayout>
  );
};

export default Page;
