import {AbilityBuilder, createMongoAbility } from '@casl/ability'

/**
 * createMongoAbility is a factory function in modern CASL (v6+) that creates an ability instance 
 * equipped to parse and evaluate permissions using MongoDB query syntax.
 * It serves as the default, standard way to instantiate CASL's MongoAbility engine.
*/
const { can, cannot, build} = new AbilityBuilder(createMongoAbility);

can('read', 'Order');
can('update', 'Order');

cannot('delete', 'Order');

const ability = build();

const result = ability.can('read', 'Order');
console.log(result);