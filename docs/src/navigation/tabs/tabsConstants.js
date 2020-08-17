/* eslint max-len: 0 */

export const presidents = [
    {
        name: 'A George Washington',
        biography: 'George Washington (February 22, 1732 – December 14, 1799) was the first President of the United States...',
    },
    {
        name: 'B Thomas Jefferson',
        biography: 'Thomas Jefferson (April 13 1743 – July 4, 1826) was an American lawyer',
    },
    {
        name: 'C Abraham Lincoln',
        biography: 'Abraham Lincoln (February 12, 1809 – April 15, 1865) was the 16th President of the United States',
    },
    {
        name: 'D Benjamin Harrison',
        biography: 'Benjamin Harrison (August 20, 1833 – March 13, 1901) was the 23rd President of the United States',
    },
    {
        name: 'E William McKinley',
        biography: 'William McKinley (January 29, 1843 – September 14, 1901) was the 25th President of the United States',
    },
    {
        name: 'F Franklin D. Roosevelt',
        biography: 'Franklin Delano Roosevelt (January 30, 1882 – April 12, 1945), commonly known by his initials FDR, was an American statesman',
    },
    {
        name: 'G Theodore Roosevelt',
        biography: 'Theodore Roosevelt (October 27, 1858 – January 6, 1919), often referred to as Teddy or TR...',
    },
];

export const getExampleTabs = () => {
    return presidents.map(({ name, biography }, index) => ({
        key: index,
        title: name,
        getContent: () => biography,
    }));
};
