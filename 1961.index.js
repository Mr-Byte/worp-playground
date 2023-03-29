/*! For license information please see 1961.index.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1961],{31961:(E,T,S)=>{S.r(T),S.d(T,{conf:()=>R,language:()=>A});var R={comments:{lineComment:"--",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},A={defaultToken:"",tokenPostfix:".sql",ignoreCase:!0,brackets:[{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],keywords:["ACCESSIBLE","ADD","ALL","ALTER","ANALYZE","AND","AS","ASC","ASENSITIVE","BEFORE","BETWEEN","BIGINT","BINARY","BLOB","BOTH","BY","CALL","CASCADE","CASE","CHANGE","CHAR","CHARACTER","CHECK","COLLATE","COLUMN","CONDITION","CONSTRAINT","CONTINUE","CONVERT","CREATE","CROSS","CUBE","CUME_DIST","CURRENT_DATE","CURRENT_TIME","CURRENT_TIMESTAMP","CURRENT_USER","CURSOR","DATABASE","DATABASES","DAY_HOUR","DAY_MICROSECOND","DAY_MINUTE","DAY_SECOND","DEC","DECIMAL","DECLARE","DEFAULT","DELAYED","DELETE","DENSE_RANK","DESC","DESCRIBE","DETERMINISTIC","DISTINCT","DISTINCTROW","DIV","DOUBLE","DROP","DUAL","EACH","ELSE","ELSEIF","EMPTY","ENCLOSED","ESCAPED","EXCEPT","EXISTS","EXIT","EXPLAIN","FALSE","FETCH","FIRST_VALUE","FLOAT","FLOAT4","FLOAT8","FOR","FORCE","FOREIGN","FROM","FULLTEXT","FUNCTION","GENERATED","GET","GRANT","GROUP","GROUPING","GROUPS","HAVING","HIGH_PRIORITY","HOUR_MICROSECOND","HOUR_MINUTE","HOUR_SECOND","IF","IGNORE","IN","INDEX","INFILE","INNER","INOUT","INSENSITIVE","INSERT","INT","INT1","INT2","INT3","INT4","INT8","INTEGER","INTERVAL","INTO","IO_AFTER_GTIDS","IO_BEFORE_GTIDS","IS","ITERATE","JOIN","JSON_TABLE","KEY","KEYS","KILL","LAG","LAST_VALUE","LATERAL","LEAD","LEADING","LEAVE","LEFT","LIKE","LIMIT","LINEAR","LINES","LOAD","LOCALTIME","LOCALTIMESTAMP","LOCK","LONG","LONGBLOB","LONGTEXT","LOOP","LOW_PRIORITY","MASTER_BIND","MASTER_SSL_VERIFY_SERVER_CERT","MATCH","MAXVALUE","MEDIUMBLOB","MEDIUMINT","MEDIUMTEXT","MIDDLEINT","MINUTE_MICROSECOND","MINUTE_SECOND","MOD","MODIFIES","NATURAL","NOT","NO_WRITE_TO_BINLOG","NTH_VALUE","NTILE","NULL","NUMERIC","OF","ON","OPTIMIZE","OPTIMIZER_COSTS","OPTION","OPTIONALLY","OR","ORDER","OUT","OUTER","OUTFILE","OVER","PARTITION","PERCENT_RANK","PRECISION","PRIMARY","PROCEDURE","PURGE","RANGE","RANK","READ","READS","READ_WRITE","REAL","RECURSIVE","REFERENCES","REGEXP","RELEASE","RENAME","REPEAT","REPLACE","REQUIRE","RESIGNAL","RESTRICT","RETURN","REVOKE","RIGHT","RLIKE","ROW","ROWS","ROW_NUMBER","SCHEMA","SCHEMAS","SECOND_MICROSECOND","SELECT","SENSITIVE","SEPARATOR","SET","SHOW","SIGNAL","SMALLINT","SPATIAL","SPECIFIC","SQL","SQLEXCEPTION","SQLSTATE","SQLWARNING","SQL_BIG_RESULT","SQL_CALC_FOUND_ROWS","SQL_SMALL_RESULT","SSL","STARTING","STORED","STRAIGHT_JOIN","SYSTEM","TABLE","TERMINATED","THEN","TINYBLOB","TINYINT","TINYTEXT","TO","TRAILING","TRIGGER","TRUE","UNDO","UNION","UNIQUE","UNLOCK","UNSIGNED","UPDATE","USAGE","USE","USING","UTC_DATE","UTC_TIME","UTC_TIMESTAMP","VALUES","VARBINARY","VARCHAR","VARCHARACTER","VARYING","VIRTUAL","WHEN","WHERE","WHILE","WINDOW","WITH","WRITE","XOR","YEAR_MONTH","ZEROFILL"],operators:["AND","BETWEEN","IN","LIKE","NOT","OR","IS","NULL","INTERSECT","UNION","INNER","JOIN","LEFT","OUTER","RIGHT"],builtinFunctions:["ABS","ACOS","ADDDATE","ADDTIME","AES_DECRYPT","AES_ENCRYPT","ANY_VALUE","Area","AsBinary","AsWKB","ASCII","ASIN","AsText","AsWKT","ASYMMETRIC_DECRYPT","ASYMMETRIC_DERIVE","ASYMMETRIC_ENCRYPT","ASYMMETRIC_SIGN","ASYMMETRIC_VERIFY","ATAN","ATAN2","ATAN","AVG","BENCHMARK","BIN","BIT_AND","BIT_COUNT","BIT_LENGTH","BIT_OR","BIT_XOR","Buffer","CAST","CEIL","CEILING","Centroid","CHAR","CHAR_LENGTH","CHARACTER_LENGTH","CHARSET","COALESCE","COERCIBILITY","COLLATION","COMPRESS","CONCAT","CONCAT_WS","CONNECTION_ID","Contains","CONV","CONVERT","CONVERT_TZ","ConvexHull","COS","COT","COUNT","CRC32","CREATE_ASYMMETRIC_PRIV_KEY","CREATE_ASYMMETRIC_PUB_KEY","CREATE_DH_PARAMETERS","CREATE_DIGEST","Crosses","CUME_DIST","CURDATE","CURRENT_DATE","CURRENT_ROLE","CURRENT_TIME","CURRENT_TIMESTAMP","CURRENT_USER","CURTIME","DATABASE","DATE","DATE_ADD","DATE_FORMAT","DATE_SUB","DATEDIFF","DAY","DAYNAME","DAYOFMONTH","DAYOFWEEK","DAYOFYEAR","DECODE","DEFAULT","DEGREES","DES_DECRYPT","DES_ENCRYPT","DENSE_RANK","Dimension","Disjoint","Distance","ELT","ENCODE","ENCRYPT","EndPoint","Envelope","Equals","EXP","EXPORT_SET","ExteriorRing","EXTRACT","ExtractValue","FIELD","FIND_IN_SET","FIRST_VALUE","FLOOR","FORMAT","FORMAT_BYTES","FORMAT_PICO_TIME","FOUND_ROWS","FROM_BASE64","FROM_DAYS","FROM_UNIXTIME","GEN_RANGE","GEN_RND_EMAIL","GEN_RND_PAN","GEN_RND_SSN","GEN_RND_US_PHONE","GeomCollection","GeomCollFromText","GeometryCollectionFromText","GeomCollFromWKB","GeometryCollectionFromWKB","GeometryCollection","GeometryN","GeometryType","GeomFromText","GeometryFromText","GeomFromWKB","GeometryFromWKB","GET_FORMAT","GET_LOCK","GLength","GREATEST","GROUP_CONCAT","GROUPING","GTID_SUBSET","GTID_SUBTRACT","HEX","HOUR","ICU_VERSION","IF","IFNULL","INET_ATON","INET_NTOA","INET6_ATON","INET6_NTOA","INSERT","INSTR","InteriorRingN","Intersects","INTERVAL","IS_FREE_LOCK","IS_IPV4","IS_IPV4_COMPAT","IS_IPV4_MAPPED","IS_IPV6","IS_USED_LOCK","IS_UUID","IsClosed","IsEmpty","ISNULL","IsSimple","JSON_APPEND","JSON_ARRAY","JSON_ARRAY_APPEND","JSON_ARRAY_INSERT","JSON_ARRAYAGG","JSON_CONTAINS","JSON_CONTAINS_PATH","JSON_DEPTH","JSON_EXTRACT","JSON_INSERT","JSON_KEYS","JSON_LENGTH","JSON_MERGE","JSON_MERGE_PATCH","JSON_MERGE_PRESERVE","JSON_OBJECT","JSON_OBJECTAGG","JSON_OVERLAPS","JSON_PRETTY","JSON_QUOTE","JSON_REMOVE","JSON_REPLACE","JSON_SCHEMA_VALID","JSON_SCHEMA_VALIDATION_REPORT","JSON_SEARCH","JSON_SET","JSON_STORAGE_FREE","JSON_STORAGE_SIZE","JSON_TABLE","JSON_TYPE","JSON_UNQUOTE","JSON_VALID","LAG","LAST_DAY","LAST_INSERT_ID","LAST_VALUE","LCASE","LEAD","LEAST","LEFT","LENGTH","LineFromText","LineStringFromText","LineFromWKB","LineStringFromWKB","LineString","LN","LOAD_FILE","LOCALTIME","LOCALTIMESTAMP","LOCATE","LOG","LOG10","LOG2","LOWER","LPAD","LTRIM","MAKE_SET","MAKEDATE","MAKETIME","MASK_INNER","MASK_OUTER","MASK_PAN","MASK_PAN_RELAXED","MASK_SSN","MASTER_POS_WAIT","MAX","MBRContains","MBRCoveredBy","MBRCovers","MBRDisjoint","MBREqual","MBREquals","MBRIntersects","MBROverlaps","MBRTouches","MBRWithin","MD5","MEMBER OF","MICROSECOND","MID","MIN","MINUTE","MLineFromText","MultiLineStringFromText","MLineFromWKB","MultiLineStringFromWKB","MOD","MONTH","MONTHNAME","MPointFromText","MultiPointFromText","MPointFromWKB","MultiPointFromWKB","MPolyFromText","MultiPolygonFromText","MPolyFromWKB","MultiPolygonFromWKB","MultiLineString","MultiPoint","MultiPolygon","NAME_CONST","NOT IN","NOW","NTH_VALUE","NTILE","NULLIF","NumGeometries","NumInteriorRings","NumPoints","OCT","OCTET_LENGTH","OLD_PASSWORD","ORD","Overlaps","PASSWORD","PERCENT_RANK","PERIOD_ADD","PERIOD_DIFF","PI","Point","PointFromText","PointFromWKB","PointN","PolyFromText","PolygonFromText","PolyFromWKB","PolygonFromWKB","Polygon","POSITION","POW","POWER","PS_CURRENT_THREAD_ID","PS_THREAD_ID","PROCEDURE ANALYSE","QUARTER","QUOTE","RADIANS","RAND","RANDOM_BYTES","RANK","REGEXP_INSTR","REGEXP_LIKE","REGEXP_REPLACE","REGEXP_REPLACE","RELEASE_ALL_LOCKS","RELEASE_LOCK","REPEAT","REPLACE","REVERSE","RIGHT","ROLES_GRAPHML","ROUND","ROW_COUNT","ROW_NUMBER","RPAD","RTRIM","SCHEMA","SEC_TO_TIME","SECOND","SESSION_USER","SHA1","SHA","SHA2","SIGN","SIN","SLEEP","SOUNDEX","SOURCE_POS_WAIT","SPACE","SQRT","SRID","ST_Area","ST_AsBinary","ST_AsWKB","ST_AsGeoJSON","ST_AsText","ST_AsWKT","ST_Buffer","ST_Buffer_Strategy","ST_Centroid","ST_Collect","ST_Contains","ST_ConvexHull","ST_Crosses","ST_Difference","ST_Dimension","ST_Disjoint","ST_Distance","ST_Distance_Sphere","ST_EndPoint","ST_Envelope","ST_Equals","ST_ExteriorRing","ST_FrechetDistance","ST_GeoHash","ST_GeomCollFromText","ST_GeometryCollectionFromText","ST_GeomCollFromTxt","ST_GeomCollFromWKB","ST_GeometryCollectionFromWKB","ST_GeometryN","ST_GeometryType","ST_GeomFromGeoJSON","ST_GeomFromText","ST_GeometryFromText","ST_GeomFromWKB","ST_GeometryFromWKB","ST_HausdorffDistance","ST_InteriorRingN","ST_Intersection","ST_Intersects","ST_IsClosed","ST_IsEmpty","ST_IsSimple","ST_IsValid","ST_LatFromGeoHash","ST_Length","ST_LineFromText","ST_LineStringFromText","ST_LineFromWKB","ST_LineStringFromWKB","ST_LineInterpolatePoint","ST_LineInterpolatePoints","ST_LongFromGeoHash","ST_Longitude","ST_MakeEnvelope","ST_MLineFromText","ST_MultiLineStringFromText","ST_MLineFromWKB","ST_MultiLineStringFromWKB","ST_MPointFromText","ST_MultiPointFromText","ST_MPointFromWKB","ST_MultiPointFromWKB","ST_MPolyFromText","ST_MultiPolygonFromText","ST_MPolyFromWKB","ST_MultiPolygonFromWKB","ST_NumGeometries","ST_NumInteriorRing","ST_NumInteriorRings","ST_NumPoints","ST_Overlaps","ST_PointAtDistance","ST_PointFromGeoHash","ST_PointFromText","ST_PointFromWKB","ST_PointN","ST_PolyFromText","ST_PolygonFromText","ST_PolyFromWKB","ST_PolygonFromWKB","ST_Simplify","ST_SRID","ST_StartPoint","ST_SwapXY","ST_SymDifference","ST_Touches","ST_Transform","ST_Union","ST_Validate","ST_Within","ST_X","ST_Y","StartPoint","STATEMENT_DIGEST","STATEMENT_DIGEST_TEXT","STD","STDDEV","STDDEV_POP","STDDEV_SAMP","STR_TO_DATE","STRCMP","SUBDATE","SUBSTR","SUBSTRING","SUBSTRING_INDEX","SUBTIME","SUM","SYSDATE","SYSTEM_USER","TAN","TIME","TIME_FORMAT","TIME_TO_SEC","TIMEDIFF","TIMESTAMP","TIMESTAMPADD","TIMESTAMPDIFF","TO_BASE64","TO_DAYS","TO_SECONDS","Touches","TRIM","TRUNCATE","UCASE","UNCOMPRESS","UNCOMPRESSED_LENGTH","UNHEX","UNIX_TIMESTAMP","UpdateXML","UPPER","USER","UTC_DATE","UTC_TIME","UTC_TIMESTAMP","UUID","UUID_SHORT","UUID_TO_BIN","VALIDATE_PASSWORD_STRENGTH","VALUES","VAR_POP","VAR_SAMP","VARIANCE","VERSION","WAIT_FOR_EXECUTED_GTID_SET","WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS","WEEK","WEEKDAY","WEEKOFYEAR","WEIGHT_STRING","Within","X","Y","YEAR","YEARWEEK"],builtinVariables:[],tokenizer:{root:[{include:"@comments"},{include:"@whitespace"},{include:"@numbers"},{include:"@strings"},{include:"@complexIdentifiers"},{include:"@scopes"},[/[;,.]/,"delimiter"],[/[()]/,"@brackets"],[/[\w@]+/,{cases:{"@operators":"operator","@builtinVariables":"predefined","@builtinFunctions":"predefined","@keywords":"keyword","@default":"identifier"}}],[/[<>=!%&+\-*/|~^]/,"operator"]],whitespace:[[/\s+/,"white"]],comments:[[/--+.*/,"comment"],[/#+.*/,"comment"],[/\/\*/,{token:"comment.quote",next:"@comment"}]],comment:[[/[^*/]+/,"comment"],[/\*\//,{token:"comment.quote",next:"@pop"}],[/./,"comment"]],numbers:[[/0[xX][0-9a-fA-F]*/,"number"],[/[$][+-]*\d*(\.\d*)?/,"number"],[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,"number"]],strings:[[/'/,{token:"string",next:"@string"}],[/"/,{token:"string.double",next:"@stringDouble"}]],string:[[/\\'/,"string"],[/[^']+/,"string"],[/''/,"string"],[/'/,{token:"string",next:"@pop"}]],stringDouble:[[/[^"]+/,"string.double"],[/""/,"string.double"],[/"/,{token:"string.double",next:"@pop"}]],complexIdentifiers:[[/`/,{token:"identifier.quote",next:"@quotedIdentifier"}]],quotedIdentifier:[[/[^`]+/,"identifier"],[/``/,"identifier"],[/`/,{token:"identifier.quote",next:"@pop"}]],scopes:[]}}}}]);