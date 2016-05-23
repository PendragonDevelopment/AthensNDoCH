import {Mongo} from 'meteor/mongo';
import {Astro} from 'meteor/jagi:astronomy';

export const Schedules = new Mongo.Collection('schedules');

export const Schedule = Astro.Class({
    name: 'Schedule', // name of this model/object

    collection: Schedules, // the collection it should be associated with

    fields: {
        name: 'string',
        description: 'string',
        location: 'string',
        scheduleTime: 'date',
        saving: 'boolean', //in the process of being saved to DB?
        createdAt: 'date'
    },
    events: {
        beforeInsert() {
            this.createdAt = new Date();
        }
    }
});

if (process.env.NODE_ENV === 'development') {
    global.Schedules = Schedules;
    global.Schedule = Schedule;
}