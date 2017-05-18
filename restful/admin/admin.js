var myApp = angular.module('myApp', ['ng-admin']);
myApp.config(['NgAdminConfigurationProvider', function (nga) {
    var admin = nga.application('My Admin').baseApiUrl('../'); 
    var allEntitys = {};
    
    (()=>{
      allEntitys['article'] = nga.entity('article');
      allEntitys['user'] = nga.entity('user');
      
    })()
    
    var addTableFns = []
        
    addTableFns.push(()=>{    
        //---- code for table article ----

        var idField = nga.field('id')
        .label('ID');

        var otherFields = [            
            nga.field('name').label('名称'),            
            nga.field('content').label('内容'),            
            nga.field('created_time').label('创建时间'),            
            nga.field('created_by').label('创建用户ID'),
        ];
        var allFields = idField?[
            idField,
            ...otherFields
        ]:otherFields;

        var table = allEntitys['article'];
        //primaryKey!
        table.identifier(idField).label('文章表');

        table.listView()
        .fields(allFields)
        .listActions(idField?['show','edit','delete']:[])
        .filters(allFields.map(x=>x.pinned(true)))
        .sortField('id')
        .perPage(10);

        table.creationView().fields(otherFields);
        table.editionView().fields(allFields);
        table.showView().fields(allFields);
        
        admin.addEntity(table);
        allEntitys['article'] = table
    
        //---- end for table article ----
    })
        
    addTableFns.push(()=>{    
        //---- code for table user ----

        var idField = nga.field('id')
        .label('id');

        var otherFields = [            
            nga.field('name').label('name'),
        ];
        var allFields = idField?[
            idField,
            ...otherFields
        ]:otherFields;

        var table = allEntitys['user'];
        //primaryKey!
        table.identifier(idField).label('user');

        table.listView()
        .fields(allFields)
        .listActions(idField?['show','edit','delete']:[])
        .filters(allFields.map(x=>x.pinned(true)))
        .sortField('id')
        .perPage(10);

        table.creationView().fields(otherFields);
        table.editionView().fields(allFields);
        table.showView().fields(allFields);
        
        admin.addEntity(table);
        allEntitys['user'] = table
    
        //---- end for table user ----
    })
    

    // attach the admin application to the DOM and execute it
    addTableFns.map((x)=>x())    
    nga.configure(admin);
}]);
