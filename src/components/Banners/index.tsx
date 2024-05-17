'use client';

import Image from 'next/image';

export default function Banners() {
    return (
      <div className="photo">
        <Image
          src="/assets/images/banners/overview.png"
          alt="overview"
          layout="responsive"
          width={800}
          height={794}
        />
        <Image
          src="/assets/images/banners/smart.png"
          alt="smart"
          layout="responsive"
          width={800}
          height={794}
        />
        <Image
          src="/assets/images/banners/dual_braking_system.png"
          alt="brake"
          layout="responsive"
          width={800}
          height={794}
        />
        <Image
          src="/assets/images/banners/led_light.png"
          alt="led_light"
          layout="responsive"
          width={800}
          height={794}
        />
        <Image
          src="/assets/images/banners/folding.png"
          alt="folding"
          layout="responsive"
          width={800}
          height={794}
        />
        <Image
          src="/assets/images/banners/regenerative.png"
          alt="regenerative"
          layout="responsive"
          width={800}
          height={794}
        />
        <Image
          src="/assets/images/banners/easy_charging.png"
          alt="charge"
          layout="responsive"
          width={800}
          height={794}
        />
        <Image
          src="/assets/images/banners/ride_modes.png"
          alt="modes"
          layout="responsive"
          width={800}
          height={794}
        />
      </div>
    );
  }