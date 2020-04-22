from tempfile import mkstemp
from shutil import move, copymode
from os import fdopen, remove, environ

def replace(file_path, pattern, subst):
    #Create temp file
    fh, abs_path = mkstemp()
    with fdopen(fh,'w') as new_file:
        with open(file_path) as old_file:
            for line in old_file:
                lent=line.rfind(pattern) 
                if lent > -1:
                    subst='%s%s' %(" "*lent, subst)
                    new_file.write(line.replace(line, subst))
                else:
                    new_file.write(line)
                # new_file.write(line.replace(pattern, subst))
    #Copy the file permissions from the old file to the new file
    copymode(file_path, abs_path)
    #Remove original file
    remove(file_path)
    #Move new file
    move(abs_path, file_path)

versionName= 'versionName "%s.%s"\n' %(environ['CIRCLE_BUILD_NUM'], environ['CIRCLE_BRANCH'])
replace('./android/app/build.gradle', 'versionName', versionName)
versionCode= 'versionCode %s\n' %environ['CIRCLE_BUILD_NUM']
replace('./android/app/build.gradle', 'versionCode', versionCode)
