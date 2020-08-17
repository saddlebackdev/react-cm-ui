export const breadcrumbsNameMap = {
    '/': 'Home',
    '/my-dashboard/': 'My Dashboard',
    '/my-dashboard/follow-ups/': 'Follow Ups',
    '/my-dashboard/follow-ups/in-progress': 'Follow Ups In Progress',
    '/my-dashboard/follow-ups/all': 'All Follow Ups',
    '/my-dashboard/follow-ups/unclaimed': 'Team Follow Ups',
    '/my-dashboard/follow-ups/closed': 'Completed Follow Ups',
    '/my-dashboard/management/escalated': 'Escalated Follow Ups',
    '/my-dashboard/management/overview': 'Team Dashboard',
    '/my-dashboard/notifications': 'Notification Center',
    'a': 'This should be very long or something like that',
};

export const pathBreadcrumbs = [
    {
        id: 1,
        to: '/',
        onBreadcrumbClick: () => {
            console.log('click /');
        },
    },
    {
        id: 2,
        to: '/my-dashboard/',
        onBreadcrumbClick: () => {
            console.log('click /my-dashboard/');
        },
    },
    {
        id: 3,
        to: '/my-dashboard/follow-ups/',
        onBreadcrumbClick: () => {
            console.log('click /my-dashboard/follow-ups/');
        },
    },
    {
        id: 4,
        to: '/my-dashboard/follow-ups/in-progress',
        onBreadcrumbClick: () => {
            console.log('click /my-dashboard/follow-ups/in-progress');
        },
    },
    {
        id: 5,
        to: 'a',
        onBreadcrumbClick: () => {
            console.log('click /my-dashboard/follow-ups/in-progress');
        },
    },
];
