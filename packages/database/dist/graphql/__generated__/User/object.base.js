import { defineExposeObject, definePrismaObject, } from '../utils';
export var UserObject = definePrismaObject('User', {
    description: undefined,
    findUnique: function (_a) {
        var id = _a.id;
        return ({ id: id });
    },
    fields: function (t) { return ({
        id: t.exposeID('id', UserIdFieldObject),
        username: t.exposeString('username', UserUsernameFieldObject),
        name: t.exposeString('name', UserNameFieldObject),
        email: t.exposeString('email', UserEmailFieldObject),
    }); },
});
export var UserIdFieldObject = defineExposeObject('String', {
    description: undefined,
    nullable: false,
});
export var UserUsernameFieldObject = defineExposeObject('String', {
    description: undefined,
    nullable: false,
});
export var UserNameFieldObject = defineExposeObject('String', {
    description: undefined,
    nullable: false,
});
export var UserEmailFieldObject = defineExposeObject('String', {
    description: undefined,
    nullable: false,
});
