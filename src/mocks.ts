import moment from 'moment'

export interface Post {
    id: string,
    title: string, 
    created: moment.Moment
}

export const today: Post = {
    id: '1',
    title: 'today',
    created: moment().subtract(1, 'seconds'),
}


export const thisWeek: Post = {
    id: '2',
    title: 'This week',
    created: moment().subtract(6, 'days'),
}



export const thisMonth: Post = {
    id: '3',
    title: 'This month',
    created: moment().subtract(30, 'days'),
}
