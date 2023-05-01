import React, { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10 ">
        <ArchiveCard
          title="Referral Module"
          des="ASP.NET MVC project for
        configuring referral code-based details, utilizing .NET Core API and
        WCF for database interaction, integrated vendor API
        using factory design pattern for award redemption, and implemented a
        status check API"
          listItem={["ASP.Net MVC", ".NET Core", "MySQL"]}
          link=""
        />
        <ArchiveCard
          title="MessagingRedemptions"
          des="Developed and integrated APIs for efficient one-click redemption of merchandise and gift cards, displayed customer redemptions and accruals, and ensured a seamless user experience using .NET Framework and design patterns."
          listItem={[".Net Web Api", "MySQL"]}
          link=""
        />
        <ArchiveCard
          title="Recharge Application"
          des="Developed a mobile recharge website with complete end-to-end flow using ASP.NET MVC, HTML, CSS, jQuery, and MySQL, allowing users to select operators, regions, and plans based on retrieved details from the database."
          listItem={["ASP.Net MVC", "MySQL"]}
          link=""
        />
        {showMore && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="MerchandiseSupport Enhancement"
                des="I fixed bugs, added tables for YouTube links and product images, and used SQL and database knowledge for a website merchandise project."
                listItem={["Web API", "WCF", "MySQL"]}
                link=""
              />
            </motion.div>
          </div>
        )}
      </div>
      <div>
        <div className="mt-12 flex items-center justify-center">
          {showMore ? (
            <button
              onClick={() => setShowMore(false)}
              className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setShowMore(true)}
              className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Archive;
