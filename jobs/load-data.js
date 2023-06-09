upsertMany(
  'rfp', // the DB table
  'rfp_uuid', // a DB column with a unique constraint OR a CONSTRAINT NAME
  [
    { rfp_uuid: 'abc123', email: 'one@openfn.org' },
    { rfp_uuid: 'xyz789', email: 'two@openfn.org' },
  ],
  { logValues: true }
);