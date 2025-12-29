
// Gallery Data
// This file serves as the single source of truth for gallery, map, and video items.

// Photo Gallery Items
export const galleryItems = [
    { id: 1, category: 'nn2', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'NN2 Hydropower Dam', titleLa: 'ເຂື່ອນໄຟຟ້ານ້ຳງື່ມ 2' },
    { id: 2, category: 'nn2', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'NN2 Resettlement Village', titleLa: 'ບ້ານຈັດສັນ ນ້ຳງື່ມ 2' },
    { id: 3, category: 'nn2', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'NN2 Village Office', titleLa: 'ຫ້ອງການບ້ານ ນ້ຳງື່ມ 2' },
    { id: 4, category: 'nn2', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'NN2 School', titleLa: 'ໂຮງຮຽນ ນ້ຳງື່ມ 2' },
    { id: 5, category: 'xhpp', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Xayaburi HPP Health Center', titleLa: 'ສຸກສາລາ ໄຊຍະບູລີ' },
    { id: 6, category: 'xhpp', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Xayaburi HPP Temple', titleLa: 'ວັດ ໄຊຍະບູລີ' },
    { id: 7, category: 'xhpp', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Xayaburi HPP Access Road', titleLa: 'ທາງເຂົ້າໂຄງການ ໄຊຍະບູລີ' },
    { id: 8, category: 'xhpp', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Xayaburi HPP Water System', titleLa: 'ລະບົບນ້ຳ ໄຊຍະບູລີ' },
    { id: 9, category: 'lphpp', image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'LPHPP Community Meeting', titleLa: 'ກອງປະຊຸມຊຸມຊົນ LPHPP' },
    { id: 10, category: 'lphpp', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'LPHPP Training', titleLa: 'ການຝຶກອົບຮົມ LPHPP' },
    { id: 11, category: 'lphpp', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'LPHPP Skills Development', titleLa: 'ການພັດທະນາທັກສະ LPHPP' },
    { id: 12, category: 'lphpp', image: 'https://images.unsplash.com/photo-1534397620889-38cdab3f7d6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'LPHPP Site Overview', titleLa: 'ພາບລວມສະຖານທີ່ LPHPP' },
];

// Maps Items (Project Maps/Layouts)
export const mapItems = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        titleEn: 'Master Site Plan',
        titleLa: 'ແຜນຜັງສະຖານທີ່ຫຼັກ',
        categoryEn: 'General Layout',
        categoryLa: 'ແຜນຜັງທົ່ວໄປ',
        descEn: 'Detailed overview of the entire resettlement area layout and infrastructure placement.',
        descLa: 'ພາບລວມລາຍລະອຽດຂອງຜັງພື້ນທີ່ຍົກຍ້າຍທັງໝົດ ແລະ ການວາງພື້ນຖານໂຄງລ່າງ.'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        titleEn: 'Village Layout Plan',
        titleLa: 'ແຜນຜັງບ້ານ',
        categoryEn: 'Residential',
        categoryLa: 'ທີ່ພັກອາໄສ',
        descEn: 'Zoning and plot distribution for residential houses within the resettlement village.',
        descLa: 'ການກຳນົດເຂດ ແລະ ການແບ່ງຕອນດິນສຳລັບບ້ານພັກອາໄສພາຍໃນບ້ານຈັດສັນ.'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        titleEn: 'Road Network Map',
        titleLa: 'ແຜນທີ່ເຄືອຂ່າຍຖະໜົນ',
        categoryEn: 'Infrastructure',
        categoryLa: 'ພື້ນຖານໂຄງລ່າງ',
        descEn: 'Comprehensive map of access roads, internal streets, and drainage systems.',
        descLa: 'ແຜນທີ່ຄົບຊຸດຂອງເສັ້ນທາງເຂົ້າ-ອອກ, ຖະໜົນພາຍໃນ ແລະ ລະບົບລະບາຍນ້ຳ.'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        titleEn: 'Water Supply System',
        titleLa: 'ລະບົບນ້ຳປະປາ',
        categoryEn: 'Utilities',
        categoryLa: 'ສາທາລະນູປະໂພກ',
        descEn: 'Design layout for clean water storage tanks and distribution pipelines.',
        descLa: 'ແຜນຜັງການອອກແບບສຳລັບຖັງເກັບນ້ຳສະອາດ ແລະ ທໍ່ສົ່ງນ້ຳ.'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1473421709633-7b86d7d5b01f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        titleEn: 'Electrical Grid Plan',
        titleLa: 'ແຜນຜັງໄຟຟ້າ',
        categoryEn: 'Utilities',
        categoryLa: 'ສາທາລະນູປະໂພກ',
        descEn: 'Network distribution for power lines, street lighting, and transformer locations.',
        descLa: 'ເຄືອຂ່າຍການແຈກຢາຍສຳລັບສາຍໄຟຟ້າ, ໄຟເຍືອງທາງ ແລະ ສະຖານທີ່ຕັ້ງໝໍ້ແປງ.'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        titleEn: 'Land Use Zoning',
        titleLa: 'ແຜນທີ່ການແບ່ງເຂດດິນ',
        categoryEn: 'Planning',
        categoryLa: 'ການວາງແຜນ',
        descEn: 'Delineation of agricultural land, community spaces, and conservation areas.',
        descLa: 'ການແບ່ງເຂດທີ່ດິນກະສິກຳ, ພື້ນທີ່ຊຸມຊົນ ແລະ ເຂດອະນຸລັກ.'
    },
];

// Videos Items
export const videoItems = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Dam Construction Overview', titleLa: 'ພາບລວມການກໍ່ສ້າງເຂື່ອນ', duration: '5:30' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Village Resettlement Process', titleLa: 'ຂະບວນການຍົກຍ້າຍບ້ານ', duration: '8:45' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Community Engagement', titleLa: 'ການມີສ່ວນຮ່ວມຂອງຊຸມຊົນ', duration: '4:15' },
    { id: 4, thumbnail: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Livelihood Training', titleLa: 'ການຝຶກອົບຮົມການດຳລົງຊີວິດ', duration: '6:20' },
    { id: 5, thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'Infrastructure Development', titleLa: 'ການພັດທະນາໂຄງລ່າງພື້ນຖານ', duration: '7:10' },
    { id: 6, thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', titleEn: 'PVD Company Profile', titleLa: 'ໂປຣໄຟລ໌ບໍລິສັດ PVD', duration: '10:00' },
];

// Project Map Summaries (for the interactive map on Gallery page)
export const projectMapSummaries = [
    {
        id: 'nn2', // Matched with project ID
        nameEn: 'Nam Ngum 2 (NN2)',
        nameLa: 'ນ້ຳງື່ມ 2 (NN2)',
        side: 'left',
        image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        capacity: '1,053 HHs',
        location: 'Vientiane Province',
        locationLa: 'ແຂວງວຽງຈັນ',
        descEn: 'Comprehensive resettlement including new site construction and infrastructure.',
        descLa: 'ການຍົກຍ້າຍຈັດສັນຢ່າງຮອບດ້ານລວມທັງການກໍ່ສ້າງສະຖານທີ່ໃໝ່ແລະພື້ນຖານໂຄງລ່າງ.',
        status: 'Completed',
        statusLa: 'ສຳເລັດແລ້ວ',
        pinTop: '48%',
        pinLeft: '26%',
    },
    {
        id: 'xhpp',
        nameEn: 'Xayaburi HPP (XHPP)',
        nameLa: 'ໄຊຍະບູລີ (XHPP)',
        side: 'right',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        capacity: '663 HHs',
        location: 'Xayaburi Province',
        locationLa: 'ແຂວງໄຊຍະບູລີ',
        descEn: 'Resettlement with ethnic minority support.',
        descLa: 'ການຍົກຍ້າຍຈັດສັນພ້ອມການສະໜັບສະໜູນຊົນເຜົ່າ.',
        status: 'Completed',
        statusLa: 'ສຳເລັດແລ້ວ',
        pinTop: '40%',
        pinLeft: '15%',
    },
    {
        id: 'lphpp',
        nameEn: 'Luang Prabang HPP (LPHPP)',
        nameLa: 'ຫຼວງພະບາງ (LPHPP)',
        side: 'right',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        capacity: '1,593 HHs',
        location: 'Luang Prabang Province',
        locationLa: 'ແຂວງຫຼວງພະບາງ',
        descEn: 'Largest ongoing resettlement project.',
        descLa: 'ໂຄງການຍົກຍ້າຍຈັດສັນທີ່ໃຫຍ່ທີ່ສຸດທີ່ກຳລັງດຳເນີນຢູ່.',
        status: 'Ongoing',
        statusLa: 'ກຳລັງດຳເນີນ',
        pinTop: '25%',
        pinLeft: '35%',
    },
];

export const photoCategories = ['all', 'nn2', 'xhpp', 'lphpp'];
