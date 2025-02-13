import p1 from '../assets/massages/p1.png';
import p2 from '../assets/massages/p2.png';
import p3 from '../assets/massages/p3.png';
import p4 from '../assets/massages/p4.png';
import p5 from '../assets/massages/p5.png';
import p6 from '../assets/massages/p6.png';
import p7 from '../assets/massages/p7.png';
import p8 from '../assets/massages/p8.png';

export const timeSlot = [
    '9:00', '9:15', '9:30', '9:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45', '12:00', '12:15',
    '12:30','12:45', '1:00', '1:15', '1:30', '1:45', '2:00', '2:15','2:30', '2:45', '3:00', '3:15', '3:30', '3:45', '4:00',
    '4:15', '4:30', '4:45', '5:00', '5:15', '5:30', '5:45', '6:00', '6:15', '6:30', '6:45', '7:00', '7:15', '7:30', '7:45', '8:00'
]

export const massage = {
    'deep tissue massage': {
        img: p1,
        title: 'deep tissue massage',
        intro: 'Deep tissue massage is a therapeutic technique that focuses on the deeper layers of muscles and connective tissues. Using slow, firm strokes and deep finger pressure, this massage is designed to relieve chronic tension and muscle knots.',
        benefit: [
            'Alleviates muscle tension and stiffness',
            'Improves circulation and promotes faster healing',
            'Reduces stress and anxiety',
            'Helps in treating sports injuries and chronic pain',
            'Enhances flexibility and mobility'
        ],
        optional: 'Deep tissue massage can be intense as it targets deeper muscle layers. However, it should not be unbearably painful. Communication with your therapist is key to adjusting pressure levels for your comfort.',
        preTreatment: [
            'Stay hydrated before your appointment.',
            'Avoid heavy meals at least an hour before the session.',
            'Wear loose, comfortable clothing.',
            'Inform your therapist about any medical conditions or injuries.',
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)'
        ],
        afterCare: [
            'Drink plenty of water to flush out toxins.',
            'Rest and allow your muscles to recover.',
            'Apply a warm compress if you experience soreness.',
            'Avoid strenuous activities for at least 24 hours.',
            'Follow any additional guidance provided by your therapist.'
        ]
    },
    'swedish massage': {
        img: p1,
        title: 'swedish massage',
        intro: 'Swedish massage is a gentle, full-body massage that promotes relaxation and improves circulation. It involves long, flowing strokes, kneading, and light tapping.',
        benefit: [
            'Reduces stress and promotes relaxation',
            'Enhances blood circulation',
            'Relieves muscle tension and pain',
            'Improves flexibility and range of motion',
            'Boosts immune system function'
        ],
        optional: 'Swedish massage is generally gentle and soothing. It should not cause discomfort, though slight pressure may be used to relieve tension.',
        preTreatment: [
            'Arrive relaxed and avoid caffeine before the session.',
            'Wear comfortable clothing.',
            'Communicate any preferences or concerns with your therapist.',
            'Inform your therapist about any medical conditions or injuries.',
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)'
        ],
        afterCare: [
            'Drink water to stay hydrated.',
            'Take time to rest and enjoy the relaxation benefits.',
            'Stretch lightly if needed to enhance flexibility.',
            'Avoid intense physical activity for a few hours.'
        ]
    },
    'sports massage': {
        img: p1,
        title: 'sports massage',
        intro: 'Sports massage is a deep and targeted massage technique used to enhance athletic performance and prevent injuries. It is beneficial for both athletes and active individuals.',
        benefit: [
            'Reduces muscle soreness and fatigue',
            'Improves flexibility and performance',
            'Speeds up recovery time',
            'Prevents sports-related injuries',
            'Enhances blood flow and oxygen supply to muscles'
        ],
        optional: 'Sports massage can be intense, especially when working on tight muscles. However, pain should be within a tolerable range, and adjustments can be made if needed.',
        preTreatment: [
            'Stay hydrated and eat a light meal before your session.',
            'Wear appropriate clothing (loose or sportswear).',
            'Share any injuries or areas of concern with your therapist.',
            'If this is your first visit, make sure to fill out the new medical intake form online before you',
        ],
        afterCare: [
            'Hydrate well to aid muscle recovery.',
            'Rest and avoid heavy exercise for 24 hours.',
            'Use ice or heat therapy for sore areas if necessary.',
            'Follow personalised guidance provided by your therapist.',
        ]
    },
    'lymphatic drainage massage': {
        img: p2,
        title: 'Lymphatic Drainage Massage',
        intro: 'This gentle massage technique stimulates the lymphatic system, helping to detoxify the body and reduce swelling.',
        benefit: [
            'Boosts immune function',
            'Reduces water retention',
            'Enhances detoxification',
            'Improves circulation',
        ],
        optional: 'It is a light and soothing treatment, not painful.',
        preTreatment: [
            'Stay well-hydrated.',
            'Avoid alcohol and caffeine before your session.',
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)',
        ],
        afterCare: [
            'Continue drinking water.',
            'Avoid heavy meals and excessive activity.',
        ]
    },
    'indian head massage': {
        img: p3,
        title: 'Indian Head Massage',
        intro: 'A massage focusing on the head, neck, and shoulders, helping to relieve stress and tension.',
        benefit: [
            'Reduces headaches and migraines',
            'Improves scalp and hair health',
            'Promotes relaxation',
        ],
        optional: 'This is a gentle massage, designed for relaxation.',
        preTreatment: [
            'Wear loose clothing.',
            'Avoid heavy meals beforehand.',
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)',
        ],
        afterCare: [
            'Drink water.',
            'Rest and enjoy the calming effects.',
        ]
    },
    'sculpting facial massage': {
        img: p4,
        title: 'Sculpting Facial Massage',
        intro: 'A technique designed to lift and tone the facial muscles, improving skin elasticity.',
        benefit: [
            'Enhances skin tone and firmness',
            'Boosts circulation',
            'Helps reduce puffiness',
        ],
        optional: 'No, this massage is soothing and rejuvenating.',
        preTreatment: [
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)',
        ],
        afterCare: [
            'Avoid heavy skincare products immediately after.',
            'Stay hydrated.'
        ]
    },
    'aromatherapy massage': {
        img: p5,
        title: 'Aromatherapy Massage',
        intro: 'A massage incorporating essential oils to enhance relaxation and healing.',
        benefit: [
            'Promotes deep relaxation',
            'Relieves stress and tension',
            'Supports emotional well-being'
        ],
        optional: 'No, it is a gentle and soothing treatment.',
        preTreatment: [
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)',
        ],
        afterCare: [
            'Drink water.',
            'Allow the oils to absorb into your skin',
        ]
    },
    'faradic facial massage': {
        img: p6,
        title: 'Faradic Facial Massage',
        intro: 'An electrical stimulation facial that tones muscles and improves skin texture finishing off with a deep massage to the facial muscle.',
        benefit: [
            'Tightens facial muscles',
            'Reduces fine lines',
            'Enhances circulation',
        ],
        optional: 'No, but there may be a mild tingling sensation.',
        preTreatment: [
            'Avoid applying heavy creams before treatment.',
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)',
        ],
        afterCare: [
            'Moisturise well.',
            'Avoid excessive sun exposure.',
        ]
    },
    'massage gun therapy': {
        img: p7,
        title: 'Massage Gun Therapy',
        intro: 'A deep muscle treatment using a massage gun for targeted relief.',
        benefit: [
            'Reduces muscle soreness',
            'Enhances recovery',
        ],
        optional: 'It can be intense but should not be painful.',
        preTreatment: [
            'Stay hydrated.',
            'Avoid excessive strain post-treatment.',
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)',
        ],
        afterCare: []
    },
    'infra light massage therapy': {
        img: p8,
        title: 'Infra Light Massage Therapy',
        intro: 'A therapy using infrared light to promote healing and relaxation.',
        benefit: [
            'Reduces pain and inflammation',
            'Supports muscle recovery',
        ],
        optional: 'No, it is a gentle treatment.',
        preTreatment: [
            'Hydrate and relax post-session.',
            'If this is your first visit, make sure to fill out the new medical intake form online before you arrive (it will be sent to you)',
        ],
        afterCare: []
    },
}