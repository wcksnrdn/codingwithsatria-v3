import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import GithubGraph from './GithubGraph';

const ProfileWithGraph = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-6 p-4">
      {/* Card Profile */}
      <div className="max-w-[320px] p-4 bg-transparent dark:bg-transparent dark:shadow-gray-800/30 mx-auto mt-[-33px] ml-[40px] md:ml-[-30px] mb-[-40px] md:mb-[0]">
        <div className="flex items-center gap-3 mb-4">
          <Avatar.Root>
            <Avatar.Image
              className="w-[72px] h-[72px] rounded-full object-cover bg-gray-200 dark:bg-gray-700"
              src="/images/ardanphoto2.jpg"
              alt="Profile"
            />
            <Avatar.Fallback className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
              JD
            </Avatar.Fallback>
          </Avatar.Root>

          <div className="flex-1">
            <h2 className="text-[15px] font-semibold text-gray-900 dark:text-white m-0">Satria Ardan Wicaksono</h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-400 mt-0.5">Frontend Web Developer</p>
          </div>
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />

        <div className="flex justify-around py-3">
          <div className="text-center">
            <div className="text-base font-semibold text-gray-900 dark:text-white">1.2k</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-base font-semibold text-gray-900 dark:text-white">500+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Connections</div>
          </div>
          <div className="text-center">
            <div className="text-base font-semibold text-gray-900 dark:text-white">43</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
          </div>
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />
      </div>
    </div>
  );
};

export default ProfileWithGraph;
