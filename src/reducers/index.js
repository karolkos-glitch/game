export const initialState = {
    isStarted: false,
    isFinished: false,
    currentStage: 0,
    plotStages: [
        {
            id: 1,
            description: '',
            answers:[
                'A',
                'B',
                'C'
            ],
        },
        {
            id: 2,
            description: '',
            answers:[
                'A',
                'B',
                'C'
            ],
        },
        {
            id: 3,
            description: '',
            answers:[
                'A',
                'B',
                'C'
            ],
        }
    ],
};
export const gameReducer = (state, {type, payload}) => {
    switch(type){
        default:
            return state;
    }
}