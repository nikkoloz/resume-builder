/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
 mode: "jit",
 theme: {
  fontSize: {
   'er': ['14px', {
    lineHeight: '21px',
    fontWeight: '300',
   }],
   'bs': ['14px', {
    lineHeight: '16.7px',
    fontWeight: '400',
   }],
   'cp2': ['16px', {
    lineHeight: '22px',
    fontWeight: '400',
   }],
   'cex': ['16px', {
    lineHeight: '20px',
    fontWeight: '500',
   }],
   'cex': ['16px', {
    lineHeight: '20px',
    fontWeight: '500',
   }],
   'lb': ['16px', {
    lineHeight: '21px',
    fontWeight: '500',
   }],
   'lbp': ['16px', {
    lineHeight: '21px',
    fontWeight: '400',
   }],
   'ne': ['16px', {
    lineHeight: '19.54px',
    fontWeight: '500',
   }],
   'ch2': ['18px', {
    lineHeight: '22px',
    fontWeight: '700',
   }],
   'cp': ['18px', {
    lineHeight: '22px',
    fontWeight: '400',
   }],
   'im': ['18px', {
    lineHeight: '21px',
    fontWeight: '500',
   }],
   'gb': ['20px', {
    lineHeight: '24px',
    fontWeight: '500',
   }],
   'gb1': ['20px', {
    lineHeight: '24px',
    fontWeight: '400',
   }],
   'h17': ['24px', {
    lineHeight: '29px',
    fontWeight: '700',
   }],
   'du': ['28px', {
    lineHeight: '43px',
    fontWeight: '500',
   }],
   'ch1': ['34px', {
    lineHeight: '41.51px',
    fontWeight: '700',
   }],

  },
  extend: {
   fontFamily: {
    "helvetca": "HelvetcaNeue",
   },
   boxShadow: {
    'custom-shadow': '0px 4px 28px 0px rgba(0, 0, 0, 0.25)'
   },
   colors: {
    "main-gray": "#C8C8C8",
    "main-gray2": "#C1C1C1",
    "main-gray3": "#BCBCBC",
    'main-blue1': '#0E80BF',
    'main-blue2': '#62A1EB',
    'main-blue': '#070724',
    'main-black': '#1A1A1A',
    'main-bluelight': '#e8f3fb',
    'main-purple': '#6B40E3',
    'main-red': '#F93B1D',
    "main-date": "#909090",
    "main-valid": "#98E37E",
    "main-invalid": "#F02424",
   },
  },
 },
 plugins: [],
}
