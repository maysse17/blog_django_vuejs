"""
This software has been developed by Envivio.

Copyright (c) 2015 Envivio, Inc.

COPYRIGHT:
    This file is the property of Envivio.
    It cannot be copied, used, or modified without obtaining
    an authorization from the authors or a mandated
    member of Envivio.
    If such an authorization is provided, any modified version or
    copy of the software must contain this header.

 WARRANTIES:
    This software is made available by the authors in the hope
    that it will be useful, but without any warranty.
    Envivio.com is not liable for any consequence related to the
    use of the provided software.
"""

import os
import re
from setuptools import setup, find_packages

# parse requirements.txt file - containing package dependencies -
req_txt = os.path.join(os.path.dirname(__file__), 'requirements.txt')
requires = [x.strip() for x in open(req_txt).readlines()]


def find_namespace_packages(*namespace):
    """
    Finds all packages under a PEP420 namespace
    :param namespace: namespace as list of folders names
    :return: list of all packages that are available/discovered starting at root namespace level
    """
    sep = '.'
    packages = []
    _ns = sep.join(namespace) if namespace else ''

    level = ''
    for fname in namespace:
        level = sep.join((level, fname)) if level else fname  # beware of first level !
        packages.append(level)

    _ns_packages = find_packages(where=os.path.join(*namespace) if _ns else '.')
    for pkg in _ns_packages:
        packages.append(sep.join((_ns, pkg)) if _ns else pkg)

    return packages


def read(*parts):
    with open(os.path.join(os.path.dirname(__file__), *parts)) as fp:
        return fp.read()


def find_version(*file_paths):
    version_file = read(*file_paths)
    version_match = re.search(r"^__version__ = ['\"]([^'\"]*)['\"]",
                              version_file, re.M)
    if version_match:
        return version_match.group(1)
    raise RuntimeError("Unable to find version string.")


__version__ = find_version('adil', 'formation', 'version.py')


setup(
    name='formation-django-1',
    version=__version__,
    description='Formation Django 1',
    author='Adil MOUHSSINE',
    author_email='adil.mouhssine@gmail.com',
    packages=find_namespace_packages('adil', 'formation'),
    include_package_data=True,
    classifiers=[
        'Programming Language :: Python :: 3.6',
        'Intended Audience :: Developers',
        'License :: Other/Proprietary License',
        ],
    install_requires=requires,
    extras_require={
        'uwsgi': [
            'uwsgi>=2.0.11,<2.1'
        ],
        'dev': [
            'django-debug-toolbar==1.5',
        ]
    },
    platforms='any',
    license='Proprietary',
)
