import React from "react";
import FingerImg from "../../assets/fingerPrint/student.jpg";

const Fingerprint = () => {
  return (
    <div className="container mx-auto py-16" data-aos="fade-up" ata-aos-duration="2000">
      <div className="flex items-center justify-between w-full">
        <div className="w-[60%] relative z-50">
          <h2 className="text-3xl font-semibold text-[#8f1537]">بصمة الجزري</h2>
          <p className="text-xl text-[#244b5a] my-10">
            تعتبر مدارس الجزري الدولية، التي أرست أسس نظام تعليمي فريد من نوعه
            بخطوات أصيلة في رحلة العلم والمعرفة، رائدة في التعليم الدولي. حيث
            تقدم مدارس الجزري الدولية لطلبتها الفرصة لاكتشاف اهتماماتهم وقدراتهم
            من خلال برامج مصممة باحترافية من تطوير المدارس
          </p>
          <button className="button">اقرأ المزيد</button>
        </div>
        <div className="relative w-[40%] flex justify-end">
          <div className="bg-[#f1f2f2] rounded-full absolute top-16 right-48 w-[400px] h-[400px]"></div>
          <img
            src={FingerImg}
            alt="Finger print"
            className="rounded-full w-[400px] h-[400px] relative z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Fingerprint;
