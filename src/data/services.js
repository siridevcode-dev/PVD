import { FaHardHat, FaBuilding, FaLeaf, FaUsers, FaHandHoldingHeart, FaExchangeAlt, FaWater, FaHome } from 'react-icons/fa';

export const serviceData = {
    'new-site': {
        key: 'newSite',
        icon: <FaHome />,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        color: 'from-blue-600 to-blue-800',
        features: [
            'Site selection and feasibility studies',
            'Master planning and layout design',
            'Land preparation and clearing',
            'Housing construction to standards',
            'Utility connections (water, electricity)',
            'Community facilities integration'
        ]
    },
    'infrastructure': {
        key: 'infrastructure',
        icon: <FaHardHat />,
        image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        color: 'from-orange-600 to-orange-800',
        features: [
            'Road construction and maintenance',
            'Bridge building and repair',
            'Water supply systems installation',
            'Electricity network development',
            'Drainage and sewage systems',
            'Telecommunications infrastructure'
        ]
    },
    'public-buildings': {
        key: 'publicBuildings',
        icon: <FaBuilding />,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        color: 'from-purple-600 to-purple-800',
        features: [
            'School construction and renovation',
            'Healthcare facility development',
            'Temple and religious building construction',
            'Community center development',
            'Government office buildings',
            'Market and commercial facilities'
        ]
    },
    'emp': {
        key: 'emp',
        icon: <FaLeaf />,
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        color: 'from-green-600 to-green-800',
        features: [
            'Environmental impact assessment',
            'Waste management systems',
            'Green space development',
            'Biodiversity conservation',
            'Water quality monitoring',
            'Air quality management'
        ]
    },
    'river-clearing': {
        key: 'riverClearing',
        icon: <FaWater />,
        image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        color: 'from-cyan-600 to-cyan-800',
        features: [
            'Reservoir area preparation',
            'Vegetation clearing and removal',
            'Debris management',
            'Shoreline stabilization',
            'Wildlife relocation assistance',
            'Water quality baseline studies'
        ]
    },
    'cdp': {
        key: 'cdp',
        icon: <FaUsers />,
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        color: 'from-indigo-600 to-indigo-800',
        features: [
            'Community engagement programs',
            'Social cohesion initiatives',
            'Cultural preservation activities',
            'Youth development programs',
            'Women empowerment initiatives',
            'Elder care and support services'
        ]
    },
    'livelihood': {
        key: 'livelihood',
        icon: <FaHandHoldingHeart />,
        image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        color: 'from-rose-600 to-rose-800',
        features: [
            'Vocational skills training',
            'Agricultural support programs',
            'Microfinance and credit access',
            'Market linkage development',
            'Small business support',
            'Employment assistance services'
        ]
    },
    'compensation': {
        key: 'compensation',
        icon: <FaExchangeAlt />,
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        color: 'from-amber-600 to-amber-800',
        features: [
            'Asset valuation and assessment',
            'Fair compensation calculation',
            'Payment processing and distribution',
            'Relocation planning and support',
            'Grievance redress mechanisms',
            'Documentation and record keeping'
        ]
    }
};

export const serviceIds = Object.keys(serviceData);
