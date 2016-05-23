import {Meteor} from 'meteor/meteor';
import {Schedule} from '../lib/collections/schedules';

export const saveSchedule = new ValidatedMethod({
    name: 'saveSchedule',
    validate(sched) {
        const schedule = new Schedule(sched);
        if(schedule.validate) {
            //TODO: Do we need to do this "validation" here?  Should we add an actual validate method?
            if(!schedule.validate()) {
                throw new Meteor.Error()
            }
        }
    },
    run(schedule) {
        const s = new Schedule(schedule);
        s.set('saving', this.isSimulation);
        if (!this.isSimulation) {
            // Simulated server lag
            Meteor._sleepForMs(1000);
        }
        s.save();
    }
});