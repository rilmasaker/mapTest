import SimpleSchema from 'simpl-schema';

// const trailSchema = new SimpleSchema({});
export const usersSchema = new SimpleSchema({
  firstName: {
    type: String,
    max: 20,
    optional: true,
  },
  lastName: {
    type: String,
    max: 20,
    optional: true,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.EmailWithTLD,
    optional: true,
  },
  avatar: {
    type: String,
    optional: true,

  },
  // trails: {
  //   type: trailSchema,
  //   optional: true,

  // },
  points: {
    type: Number,
    optional: true,

  },

  roles: {
    type: Array,
    optional: true,
  },
  'roles.$': {
    type: String,
    optional: true,
  },
  services: {
    type: Object,
    blackbox: true,
    optional: true,
  },
  profile: {
    type: Object,
    blackbox: true,
    optional: true,
  },
});

export const loginSchema = new SimpleSchema({
  login: {
    type: String,
    // regEx: SimpleSchema.RegEx.EmailWithTLD,
  },
  password: {
    type: String,
  },
});

export const registrySchema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.EmailWithTLD,
  },
  password: {
    type: String,
    min: 8,
    regEx: SimpleSchema.password,
    uniforms: { type: 'password' },
  },
});
